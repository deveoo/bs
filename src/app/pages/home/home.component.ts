import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  id_lang;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private storage: Storage,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
    })
   }

  // Go to cart page
  async gotoCartPage() {
    this.router.navigate(['/cart']);
  }

  
}
