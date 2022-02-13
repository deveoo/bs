import { Component, OnInit , ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router , ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/ht/category.service';
import { ProductService } from '../../services/ht/product.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { FilterComponent } from '../filter/filter.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CategoryProductDetailsComponent } from '../category-product-details/category-product-details.component'
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss'],
})
export class CategoryProductsComponent implements OnInit {

  categoryName: String;
  parentID: number;
  category = [];
  categoryProducts = [];
  grid: Boolean = true;
  oneColumn: Boolean = false;
  list: Boolean = false;
  displayScrollButtn: Boolean = false;
  id_lang;

  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(
    private categoryService: CategoryService ,
    private productService: ProductService , 
    private route:ActivatedRoute , 
    private router: Router,
    public loadingController: LoadingController , 
    public modalController: ModalController,
    private storage: Storage
  ) { }

  async presentLoading() {
    const message = this.id_lang == 1 ? 'Please Wait...' : '...أرجوك إنتظر';
    const loading = await this.loadingController.create({
      message: message,
      duration: 1000
    });
    return loading.present();
  }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
      this.categoryService.getCategory(this.route.snapshot.paramMap.get('id')).subscribe(res => {
        if(res.status === 200) {
          let category = res.body['category'];
          this.categoryName = category.name[id_lang - 1].value;
          this.parentID = category.id_parent;
          this.getCategoryProducts(category.associations.products);
        }
      })
    })
  }

  getCategoryProducts(productsIds) {
    this.presentLoading().then(()=>{
    let nb_products:number = 0;
    productsIds.forEach((item ,index: number) => {
      this.productService.getProduct(item.id).subscribe(res => {
        if(res.status === 200) {
          let product = res.body['product'];
          if(product.active == "1") {
            if(product.associations.hasOwnProperty('images') && 
            product.associations.images.length > 0) {
              let imageIds = product.associations.images[0].id.split('');
              product.mainImage = 'https://www.bs.version-recette.com/img/p/';
              imageIds.forEach(id => {
                product.mainImage += `${id}/`
            });
              product.mainImage += `${product.associations.images[0].id}.jpg`;
            }
            this.categoryProducts[nb_products] = product;
            nb_products++;
          }
        } 
      }) 
    })
    })
  }

  goToProductDetails(id) {
    this.router.navigate(['categoryProduct',id]);
  }

   // Open Filter page
  async openFilterPage() {
    const modal = await this.modalController.create({
      component: FilterComponent
    });
    return await modal.present();
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
