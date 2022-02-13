/**
 * Search Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  // List of Products
  public products: Product[]=[];
  public productListBackup: Product[];

  // Check is product available or not
  isProductAvailable: boolean = false;
  constructor(private productsService: ProductsService,
    public modalController: ModalController, private route: ActivatedRoute, private router: Router, public loadingController: LoadingController) {

  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
    });
    return loading.present();
  }
  ngOnInit() {
    this.getAllProducts();
  }
  // Get List of Products
  getAllProducts() {
    this.presentLoading().then(()=>{
    this.productsService.getAllProduct().subscribe(res => {
      this.loadingController.dismiss();
      if (res.status === 200) {
        console.log(res.body);
        let cat = res.body;
        this.products = cat['products'];
        let base_url = "https://buqsha.linkeys.net/api/images/products/";
        let key_url = "?ws_key=HL6S599display=fullLPTE2KSZTW4XJQSYA1HSZL8GT&output_format=JSON"
        console.log(this.products);
        for (var product of this.products) {
          let img = base_url.concat(product.id.toString()) + "/".concat(product.id_default_image.toString()).concat(key_url);
          console.log(img);
          product.id_default_image = img;
        }
        this.productListBackup = this.products;
      }
      else {
        console.log(res.body);
      }
    });
    })
    return this.products;
  }

  // Go to product details page
  async goToProductDetails(p) {
    this.productsService.setProduct(p);
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
    });
    return await modal.present();
  }

  // Get Search Result
  getProducts(ev: any) {
    // set val to the value of the searchbar
    this.products = this.productListBackup;
    const val = ev.srcElement.value;
    console.log(val);
    if (!val) {
      return;
    }
    this.products = this.products.filter(currentProd => {
      if (currentProd.name[0].value && val) {
        return (currentProd.name[0].value.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }
    });
   
  }
  // Go to cart page function
  async gotoCartPage() {
    this.router.navigate(['/cart']);
  }

  // Back to previous page function
  dismiss() {
    this.router.navigate(['/tabs/tab1']);
  }
}
