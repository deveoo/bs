import { Component, OnInit , ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router , ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/ht/category.service';
import { ProductService } from '../../services/ht/product.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  dummyList: any;

  constructor(
    private categoryService: CategoryService ,
    private productService: ProductService , 
    private route:ActivatedRoute , 
    private router: Router,
    public loadingController: LoadingController , 
    public modalController: ModalController
  ) { }

  products = [];
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
      this.productService.getProducts().subscribe(res => {
        let str = res.body.substring(res.body.indexOf('RETURN HTTP BODY</h6><pre>') + 48 , res.body.lastIndexOf(']}') + 1);
        let data = JSON.parse(this.decodeHTML(str));
        data.forEach(product => {
          if(product.hasOwnProperty('associations') && product.associations.hasOwnProperty('images') && 
          product.associations.images.length > 0) {
            let imageIds = product.associations.images[0].id.split('');
            product.mainImage = 'https://www.bs.version-recette.com/img/p/';
            imageIds.forEach(id => {
              product.mainImage += `${id}/`
            });
            product.mainImage += `${product.associations.images[0].id}.jpg`;
          }
          this.products.push(product)
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
