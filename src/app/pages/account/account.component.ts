import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';
import { Router , ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../../services/auth/login.service';
import { ModalController } from '@ionic/angular';
import { PersonalInformationsComponent } from '../../components/account/personal-informations/personal-informations.component'
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  id_lang;
  isLoggedIn = false;
  AppUser = {
    'firstname': '',
    'lastname': '',
  };
  modalCompnents = [PersonalInformationsComponent]
  constructor(
    private router: Router,
    private route:ActivatedRoute , 
    public loadingController: LoadingController,
    public toastController: ToastController , 
    public loginService: LoginService,
    public modalController: ModalController,
    private storage:Storage
  ) {
    route.params.subscribe(val => {
    })
  }
    
    ngOnInit() {
      this.storage.get('id_lang').then(id_lang => {
        this.id_lang = id_lang
        this.loginService.getUser().then(user => {
          if(user == null) {
              this.router.navigate(['login']);
          }else{
            this.isLoggedIn = true;
            this.AppUser = user[0];
          }
        }) 
      })
    }
    
    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Please Wait...',
      });
      return loading.present();
    } 

    async presentModal(index) {
      const modal = await this.modalController.create({
        component: this.modalCompnents[index],
        componentProps: { user: this.AppUser }
      });
      return await modal.present();
    }
}
