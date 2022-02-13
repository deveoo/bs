/**
 * Notification Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';
import { Association } from 'src/app/models/associations.model';
import { Produit } from 'src/app/models/produit.model';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  //notifications: any = [];
  subcategories: Category[] = [];
  subcatById: Category[] = []; 
  catId:any;
  catName:any;
  products:Produit[];
  associations:Association;
   
  
  constructor(private categoryservices:CategoryService,
    private route: ActivatedRoute, private router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController) { 
      this.catId = this.route.snapshot.paramMap.get('id');
      this.catName = this.route.snapshot.paramMap.get('name');  
      console.log(this.catId+this.catName);
      
      //this.products.push(this.p2);
      
    }

  ngOnInit() {
    this.getNotification();
  }
  
  // Get list of notification
  getNotification() {
    //this.notifications = this.notificationsService.getNotifications();
    this.subcategories = this.categoryservices.getSubCategories();
    console.log(this.subcategories);
    for (var subcat of this.subcategories) {
      if(subcat.id_parent == this.catId.toString()){
        this.subcatById.push(subcat);
      }
    }
    
    
    console.log(this.subcatById);
    
      
  }
  gotoProductPage(id:any) {
    console.log(id);
    let name: String;
    for (var sub of this.subcatById) {
      if(sub.id == id){
        name = sub.name[0].value;
        if(sub.associations!=undefined){
          if(sub.associations.products!=undefined){
            console.log("product exicts");
            this.associations= new Association();
            this.associations.products=sub.associations.products;
            this.categoryservices.setAssociation(this.associations);
            this.router.navigate(['tabs/tab2/products/',name]);
            /*for (var product of this.associations.products) { 
              console.log(product.id);
            }*/
          }
          else{
            console.log("product undefined");
            this.presentToast('there are no products'); 
          }
        }
        else{
          console.log(" association undefined");
          this.presentToast('there are no products'); 
         
        }
        
      } 
    }
    
  }
  // Go to cart page
  async gotoCartPage() {
    this.router.navigate(['/cart']);
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
      color:"warning"
    });
    toast.present();
  }
}
