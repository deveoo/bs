import { Component, OnInit , ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router , ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/ht/category.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss'],
})
export class AllCategoriesComponent implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(
    private categoryService: CategoryService , 
    private route:ActivatedRoute , 
    private router: Router,
    public loadingController: LoadingController , 
    public modalController: ModalController
  ) { }

  categories = [];
  grid: Boolean = true;
  oneColumn: Boolean = false;
  list: Boolean = false;
  displayScrollButtn: Boolean = false;

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 3000
    });
    return loading.present();
  }
  
  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.presentLoading().then(()=>{
      this.categoryService.getAll().subscribe(res => {
        let str = res.body.substring(res.body.indexOf('RETURN HTTP BODY</h6><pre>') + 50 , res.body.lastIndexOf(']}') + 1);
        let data = JSON.parse(this.decodeHTML(str));
        data.forEach(category => {
          if(category.id_parent != 0 && category.id_parent != 1) {
            category.mainImage = `https://www.bs.version-recette.com/img/c/${category.id}.jpg`;
            this.categories.push(category);
            console.log(category)
            /*if(!category.hasOwnProperty('associations') ||
            !category.associations.hasOwnProperty('categories')) console.log(category)*/
          }
        });
      })
    })
  }
  
    decodeHTML(html) {
      var txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    };

    //scroll to top of page
    scrollUp() {
      document.querySelector('app-all-products').querySelector('ion-content').scrollToTop();
    }

    // One column view function
    showOneColumn() {
      this.oneColumn = true;
      this.grid = false
      this.list = false;
    }

    // Grid view function
    showGrid() {
      this.grid = true;
      this.oneColumn = false;
      this.list = false;
    }

    // List view function
    showList() {
      this.list = true;
      this.grid = false;
      this.oneColumn = false;
    }

    logScrollStart(event) {
      this.displayScrollButtn = true
    }

    ScrollToTop() {
      this.content.scrollToTop(1500);
    }
}
