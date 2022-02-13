import { Component, OnInit , ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/ht/category.service';
import { Storage } from '@ionic/storage-angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
})
export class SubcategoryComponent implements OnInit {
  subCategories = [];
  grid: Boolean = true;
  oneColumn: Boolean = false;
  list: Boolean = false;
  displayScrollButtn: Boolean = false;
  id_lang;
  categoryName;

  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(
    private categoryService: CategoryService ,
    private route:ActivatedRoute , private router: Router,
    private storage: Storage,
    private loadingController: LoadingController,
  ) { }

  async presentLoading() {
    const message = this.id_lang == 1 ? 'Please Wait...' : '...أرجوك إنتظر';
    const loading = await this.loadingController.create({
      message: message,
      duration: 3000
    });
    return loading.present();
  }

  ngOnInit() {
    this.getCategory();
    this.getSubCategories();
  }

  getCategory() {
    this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
      this.categoryService.getCategory(this.route.snapshot.paramMap.get('id')).subscribe(res => {
        if(res.status === 200) {
          let category = res.body['category'];
          this.categoryName = category.name[id_lang - 1].value;
        }
      })
    })
  }

  getSubCategories() {
    this.storage.get('id_lang').then(id_lang => {
    this.presentLoading().then(()=>{
    let array = [];
    this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
        this.categoryService.getCategories().subscribe(res =>{
        if(res.status === 200){
          let categoriesIDs = res.body['categories'];
          categoriesIDs.forEach(data => {
            this.categoryService.getCategory(data.id).subscribe(res => {
              if(res.status === 200) {
                let category = res.body['category'];
                if(category['id_parent'] == this.route.snapshot.paramMap.get('id')) {
                  array.push(category);
                  array.sort(function(a, b){
                    if(a.name[id_lang - 1].value < b.name[id_lang - 1].value) { return -1; }
                    if(a.name[id_lang - 1].value > b.name[id_lang - 1].value) { return 1; }
                    return 0;
                })
                setTimeout(() => {
                  this.subCategories = array;
                },3000)
                }
              }
            })
          })
        }
      })
    })
  })
})
    
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

  imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}
  
}
