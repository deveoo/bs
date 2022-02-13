/**
 * Deal Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Image } from '../../models/image.model';
import { StorageService } from '../../services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProductsService } from '../../services/products.service';
import { LoadingController } from '@ionic/angular';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { FilterComponent } from '../filter/filter.component';
import { Association } from 'src/app/models/associations.model';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss'],
})
export class DealComponent implements OnInit {

   // List of prodict
   products: Product[];
   prodId: string[] = [];
   namesubcat: String;
   grid: Boolean = true;
   oneColumn: Boolean = false;
   list: Boolean = false;
   par: string = "";
   id_category: number;
   products_list: any[] = [];
   
   constructor(
      public modalController: ModalController, 
      private route: ActivatedRoute,
      private router: Router, 
      public loadingController: LoadingController,
      private categoryService: CategoryService,
      private productsService: ProductsService,
    ) {
 
   }
   async presentLoading() {
     const loading = await this.loadingController.create({
       message: 'Please Wait...',
     });
     return loading.present();
   }
   ngOnInit() {
     this.id_category = parseInt(this.route.snapshot.paramMap.get("id_category"));
     //this.getAllProducts();
     this.getProducts();
   }

   getProducts() {
    let products = []
    this.categoryService.getCategory(this.id_category).subscribe(res =>{
        let category = res.body['category'];
        category.associations.products.forEach(data => {
          this.productsService.getProductById(data.id).subscribe(res => {
            this.products_list.push(res.body);
          })
        });
    })
   }

   // Get List of Products
   getAllProducts() {
     this.presentLoading().then(()=>{
     this.productsService.getAllProduct().subscribe(res => {
       this.loadingController.dismiss();
       if (res.status === 200) {
         //console.log(res.body);
         let cat = res.body;
         this.products = cat["products"];
         let base_url = "https://buqsha.linkeys.net/api/images/products/";
         let key_url = "?ws_key=HL6S599display=fullLPTE2KSZTW4XJQSYA1HSZL8GT&output_format=JSON"
         //console.log(this.products);
         for (var product of this.products) {
           let img = base_url.concat(product.id.toString()) + "/".concat(product.id_default_image.toString()).concat(key_url);
           //console.log(img);
           product.id_default_image = img;
         }
       }
       else {
         //console.log(res.body);
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
