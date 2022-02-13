/**
 * Product Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */


import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ModalController } from '@ionic/angular';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { FilterComponent } from '../filter/filter.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Association } from 'src/app/models/associations.model';
import { Produit } from 'src/app/models/produit.model';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  // List of prodict
  products: Product[];
  prodId: string[] = [];
  namesubcat: String;
  grid: Boolean = true;
  oneColumn: Boolean = false;
  list: Boolean = false;
  associations: Association;
  par: string = "";

  constructor(private productsService: ProductsService,
    public modalController: ModalController, private route: ActivatedRoute, private categoryservices: CategoryService, private router: Router, public loadingController: LoadingController) {
    this.route.params.subscribe(params => {
      this.namesubcat = params['name'];
    });
    this.associations = this.categoryservices.getAssociation();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
    });
    return loading.present();
  }
  ngOnInit() {
    this.getProductList();
  }

  // Get List of Products
  getProductList() {
    for (var product of this.associations.products) {
      this.prodId.push(product.id.toString());
    }
    console.log(this.prodId);
    if (this.prodId.length != 1) {
      for (var i = 0; i < this.prodId.length - 1; i++) {
        this.prodId[i] = this.prodId[i].concat("|");
      }
      console.log(this.prodId);
      for (var i = 0; i < this.prodId.length; i++) {
        this.par = this.par.concat(this.prodId[i]);
      }
    }
    else {
      this.par = this.prodId[0];
    }
    console.log(this.par);
    this.getProduc(this.par);
    this.products = this.productsService.productList();
  }
  getProduc(par: string) {
    this.presentLoading().then(()=>{
    this.productsService.getProductsById(par).subscribe(res => {
      this.loadingController.dismiss();
      if (res.status === 200) {
        console.log(res.body);
        let cat = res.body;
        this.products = cat["products"];
        let base_url = "https://buqsha.linkeys.net/api/images/products/";
        let key_url = "?ws_key=HL6S599display=fullLPTE2KSZTW4XJQSYA1HSZL8GT&output_format=JSON"
        console.log(this.products);
        for (var product of this.products) {
          let img = base_url.concat(product.id.toString()) + "/".concat(product.id_default_image.toString()).concat(key_url);
          console.log(img);
          product.id_default_image = img;
        }
      }
      else {
        console.log(res.body);
      }
    });
    })
  }

  // Go to product details page
  async goToProductDetails(p) {
    this.productsService.setProduct(p);
    const modal = await this.modalController.create({
      component: ProductDetailsComponent,
    });
    return await modal.present();
    //this.router.navigate(['tabs/tab2/detail/']);
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

}
