import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoginService } from '../../../services/auth/login.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

 id_lang;
 public loginForm: FormGroup;
 formError = false;
  constructor(
    private formBuilder: FormBuilder ,
    public alertController: AlertController,
    private router: Router,
    private loginService: LoginService,
    public loadingController: LoadingController , 
    public modalController: ModalController,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit() {
    this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
    })
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

  onSignIn() {
    if(this.loginForm.invalid) {
      this.formError = true;
      if(this.id_lang == 1) {
        this.presentAlert('You should fill all fields to be able login.').then(()=>{});
      }else{
        this.presentAlert('يجب عليك ملء جميع الحقول لتتمكن من تسجيل الدخول.').then(()=>{});
      }
    }else{
      let [email, password] = [this.loginForm.value.email, this.loginForm.value.password];
      this.loginService.auth(email, password).subscribe(res => {
        let result = JSON.parse(res.body);
        this.presentLoading().then(()=>{
          setTimeout(()=>{
            this.loginForm.reset();
            if(result.status == 'error') {
              if(this.id_lang == 1) {
                this.presentAlert('Wrong Credentials ! please verify your email / password ').then(()=>{})
              }else{
                this.presentAlert('يرجى التحقق من بريدك الإلكتروني / كلمة المرور').then(()=>{})
              }
            }else{
              let user =  {
                id          : parseInt(result.id),
                firstname   : result.firstname,
                lastname    : result.lastname,
                email       : result.email,
                password    : result.password,
              };
              console.log(user);
              this.loginService.setUser(user).then(data => {
                this.router.navigate(['/tabs/tab4'])
              })
            }
          },3000)
        })
      })
    }
  }


  goBack() {
    this.router.navigate(['/landing'])
  }
}
