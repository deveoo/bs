/**
 * Checkout Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { LoginService } from '../../services/auth/login.service';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  steps: any = [];
  cards: any = [];
  id_lang;
  user;
  userAddress;
  total;

  address1 =  "";
  address2 =  "";
  city =  "";
  firstname =  "";
  lastname =  "";
  phone =  "";
  postcode =  "";
  state = "";
  constructor(
    public modalController: ModalController,
    private router: Router,
    private storage: Storage,
    private loginService: LoginService,
    private alertController: AlertController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    /*this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
      
    })*/
    this.storage.get('cart').then(cart => {
      let total = cart.forEach(item => {
        total += parseInt(item.quantity) * parseFloat(item.price);
      })
      this.total = total;
    })
    this.storage.get('user').then(user => {
      this.user = user[0];
      this.loginService.getAddresses().subscribe(adresses => {
         this.userAddress = adresses['addresses'].filter(addr => addr.id_customer == this.user?.id)[0];

         this.address1 =  this.userAddress.address1;
         this.address2 = this.userAddress.address2;
         this.firstname = this.userAddress.firstname;
         this.lastname =  this.userAddress.lastname;
         this.phone =  this.userAddress.phone;
         this.postcode =  this.userAddress.postcode;
         this.state =  this.userAddress.state;
         this.city =  this.userAddress.city;
      })
    })
    // Checkout steps
    this.steps = [
      {
        step: "Billing",
        isSelected: true
      },
      {
        step: "Payment",
        isSelected: false
      },
      {
        step: "Confirm",
        isSelected: false
      }
    ]

    // Payment cards images
    this.cards = ["assets/images/cards/visa.png",
      "assets/images/cards/mastercard.png",
      "assets/images/cards/paypal.png"]
  }

  // Go to xext section function
  next() {
    // If current section is billing then next payment section will be visible

    if (this.steps[0].isSelected) {
      this.steps[0].isSelected = false;
      this.steps[1].isSelected = true;
    }
    // If current section is Billing then next section confirm will be visible 
    else if (this.steps[1].isSelected) {
      this.steps[0].isSelected = false;
      this.steps[1].isSelected = false;
      this.steps[2].isSelected = true;

      //this.user,this.userAddress);

     this.http.get(`https://www.bs.version-recette.com/ws/order.php?email=${this.user.email}&address1=${this.address1}
     &address2=${this.address2}&postcode=${this.postcode}&city=${this.city}&total=${this.total}`,{ observe:'response',
      responseType: 'text'
    }).subscribe(data => {
      console.log(data);
    });
      
    }
  }

  // Go to order page function
  gotoOrderPage() {
    this.router.navigate(['/tabs/orders']);
  }

  // Go to product page
  gotoProductsPage() {
    this.router.navigate(['/tabs/products']);
  }

  // Back to previous screen
  dismiss() {
    this.router.navigate(['/tabs/tab1']);
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: msg,
      buttons: ['Close']
    });

    return await alert.present();
  }

}
