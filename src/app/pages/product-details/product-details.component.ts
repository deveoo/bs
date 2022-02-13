/**
 * Product Details Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { Image } from '../../models/image.model';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProductsService } from '../../services/products.service';
import { LoadingController } from '@ionic/angular';
import { Prodcart } from 'src/app/models/prodcart.model';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/ht/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  dpProduct;
  id;
  product: Prodcart;
  _idProduct: string;
  products: Product[];
  prodCart: Product;
  images : Image[]=[];
  photocart :Array<String> =[];
  prodToget: Product;

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    loop: true,
    autoplay: true,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };

  constructor(public router: Router,
    private storageService: StorageService,
    private modalController: ModalController,
    private productsService: ProductsService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private route:ActivatedRoute , 
    private productService: ProductService , 
  ) { }

  ngOnInit() {
    this.getProduct(this.id)
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 1500
    });
    return loading.present();
  }

  getProduct(id_product) {
    this.presentLoading().then(()=>{
       this.productService.getProduct(id_product).subscribe(res => {
        if(res.status === 200) {
          let product = res.body['product'];
          if(product.active == "1") {
            if(product.associations.hasOwnProperty('images') && 
            product.associations.images.length > 0) {
              let images = product.associations.images;
              this.productService.getImage(product.id,images[0].id).subscribe(res => {
                  let reader = new FileReader();
                  reader.addEventListener("load", () => {
                    product.img = reader.result;
                  }, false);
  
                  if (res) {
                    reader.readAsDataURL(res);
                  }
                },error => {
              })
             this.dpProduct = product;
             console.log(this.dpProduct)
            }
          }
        } 
      })
    })

  }


  getProduc(id:string) {
    this.presentLoading().then(()=>{
    this.productsService.getProductById(id).subscribe(res =>{
      this.loadingController.dismiss();
      if(res.status=== 200){
        console.log(res.body);
        let cat =res.body;
        this.products= cat["products"];
        let base_url="https://buqsha.linkeys.net/api/images/products/";
        let key_url="?ws_key=HL6S599display=fullLPTE2KSZTW4XJQSYA1HSZL8GT&output_format=JSON";
        let brand="https://buqsha.linkeys.net/api/images/manufacturers/";
        console.log(this.product);
        for (var prod of this.products) { 
          let img= base_url.concat(prod.id.toString())+"/".concat(prod.id_default_image.toString()).concat(key_url);
          console.log(img); 
          prod.id_default_image=img;
          prod.id_manufacturer= brand.concat(prod.id_manufacturer.toString()).concat(key_url);
          this.prodCart = prod;
         for(var i=0;i<prod.associations.images.length;i++) 
         { let image= base_url.concat(prod.id.toString())+"/".concat(prod.associations.images[i].id.toString()).concat(key_url);
         prod.associations.images[i].id = image; 
         let photo= new Image();
         photo.id=image;
         this.images.push(photo);
         }

        }
        console.log(this.product); 
        console.log(this.images); 
      }
      else{
        console.log(res.body); 
      }
    });
  })
  }  
  // Add to Cart Function
  addToCart() {
    this.photocart.push(this.prodCart.id_default_image);
    this.product = {
      id: this.prodCart.id,
      name: this.prodCart.name[0].value.toString(),
      description: this.prodCart.name[0].value.toString(),
      price:parseFloat(this.prodCart.price.toString()),
      images: this.photocart,
      quantity: 1,
    }
    // Save cart product in storage
    this.storageService.setObject(this.product, 'my-cart');
    this.presentToast('product added to your cart'); 
  }

  // Go to cart page
  async gotoCartPage() {
    this.dismiss();
    this.router.navigate(['/cart']);
  }

  // Back to previous page function
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
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
