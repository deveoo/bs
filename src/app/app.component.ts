import { Component , OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PagesService } from './services/pages.service';
import { Storage } from '@ionic/storage-angular';
import { LoadingController } from '@ionic/angular';
import { LoginService } from './services/auth/login.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [];
  id_lang;
  isLoggedIn = false;
  AppUser;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuController: MenuController,
    private router: Router,
    private pagesService: PagesService,
    private storage: Storage,
    public loadingController: LoadingController,
    private loginService: LoginService,
    private toastController: ToastController
  ) {
    this.storage.create().then(()=> {
    })
    this.initializeApp();
  }

  ngOnInit() {
    this.loginService.getUser().then(user => {
      //console.log(user)
      if(user !== null) {
        this.isLoggedIn = true;
        this.AppUser = user;
      }
    })
  }

  async presentLoading() {
    const message = this.id_lang == 1 ? 'Please Wait...' : '...ارجوك انتظر'
    const loading = await this.loadingController.create({
      message: message,
      duration: 3000
    });
    return loading.present();
  }

  async dismiss() {
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  initializeApp() {
      this.storage.get('id_lang').then(id_lang => {
        if(id_lang !== null) {
          this.id_lang = id_lang;
        }else{
          this.storage.set('id_lang',1);
        }
        // Get Menus For Side Menu
        this.appPages = this.pagesService.getPages(parseInt(this.id_lang));
      });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // Signout Button
  signout() {
    this.presentLoading().then(()=>{
      this.loginService.removeValue('user').then(()=>{
        this.isLoggedIn = false;
        this.AppUser = null;
        setTimeout(()=>{
          this.router.navigate(['landing']);
          this.menuController.enable(false);  
        },3000)
      })
    })
  }

  swicthLang() {
     let id = 1;
      this.storage.get('id_lang').then(id_lang => {
        if(id_lang !== null) {
          id = id_lang == 1 ? 2 : 1;
        }
        this.storage.set('id_lang',id).then(() => {
          window.location.reload();
        })
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