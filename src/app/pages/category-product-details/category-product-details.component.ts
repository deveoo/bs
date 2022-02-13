import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/ht/product.service';
import { CartService } from '../../services/ht/cart.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router , ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-category-product-details',
  templateUrl: './category-product-details.component.html',
  styleUrls: ['./category-product-details.component.scss'],
})
export class CategoryProductDetailsComponent implements OnInit {

  id_lang
  product = {
    'id':'',
    'name':'',
    'description':'',
    'price':'',
    'img': '',
    'id_category_default' : '',
  };

  id;
  images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ]
  constructor( 
    private productService: ProductService , 
    private cartService: CartService,
    private modalController: ModalController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private router: Router,
    private route:ActivatedRoute , 
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.getProduct(this.route.snapshot.paramMap.get('id'))
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 500
    });
    return loading.present();
  }

  getProduct(id_product) {
    this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
      //this.presentLoading().then(()=>{
       this.productService.getProduct(id_product).subscribe(res => {
        if(res.status === 200) {
          let product = res.body['product'];
          this.product.id = product.id;
          this.product.name = product.name[id_lang - 1].value;
          this.product.description = product.description_short[0].value;
          this.product.price = product.price;
          this.product.id_category_default = product.id_category_default;

          if(product.active == "1") {
            if(product.associations.hasOwnProperty('images') && 
            product.associations.images.length > 0) {
              let imageIds = product.associations.images[0].id.split('');
              this.product.img = 'https://www.bs.version-recette.com/img/p/';
              imageIds.forEach(id => {
                this.product.img += `${id}/`
            });
            this.product.img += `${product.associations.images[0].id}.jpg`;
            }
          }
        } 
      })
    //})
    })
    
  }

  // Back to previous page function
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  // Go to cart page
  async gotoCartPage() {
    this.dismiss();
    this.router.navigate(['/cart']);
  }

   // Add to Cart Function
  addToCart() {
    this.cartService.handleItem(this.product,'add');
    this.presentToast('product added to your cart'); 
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
      color:"success"
    });
    toast.present();
  }

}
