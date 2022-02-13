import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { RegisterService } from '../../../services/auth/register.service';
import { LoginService } from '../../../services/auth/login.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {

id_lang;
messages;
public registerForm: FormGroup;
 formError = false;
  constructor(
    private formBuilder: FormBuilder ,
    public alertController: AlertController,
    private router: Router,
    private loginService: LoginService,
    private registerService: RegisterService,
    public loadingController: LoadingController , 
    public modalController: ModalController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({
      firstname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
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
    this.messages = {
      'Email is required' : 'البريد الالكتروني مطلوب',
      'Firstname is required' : 'الإسم الأول مطلوب',
      'Lastname is required' : 'إسم العائلة مطلوب',
      'Password is required' : 'كلمة المرور مطلوبة',
      'An account using this email address has already been registered.' : 'تم تسجيل حساب يستخدم عنوان البريد الإلكتروني هذا بالفعل',
      'Customer sucessefuly registered' : 'تم تسجيل المستخدم بنجاح',
      'An error occurred while creating your account' : 'حدث خطأ أثناء إنشاء حسابك',
      'Invalid email' : 'بريد إلكتروني خاطئ',
      'You should fill all fields to be able register' : 'يجب عليك ملء جميع الحقول لتتمكن من التسجيل'
    };
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

  onSignUp() {
    if(this.registerForm.invalid) {
      this.formError = true;
      if(this.id_lang == 1) {
        this.presentAlert('You should fill all fields to be able register').then(()=>{});
      }else{
        this.presentAlert(this.messages['You should fill all fields to be able register']).then(()=>{});
      }
    }else{
      let [firstname , lastname , email, password] = [
        this.registerForm.value.firstname,
        this.registerForm.value.lastname,
        this.registerForm.value.email,
        this.registerForm.value.password
      ];

      this.registerService.createUser(firstname , lastname , email, password).subscribe(res => {
        let body = JSON.parse(res.body);
        if(body.status == "error") {
          if(this.id_lang == 0) {
            this.presentAlert(body.message).then(()=>{});
          }else{
            this.presentAlert(this.messages[body.message]).then(()=>{});
          }
        }else{
          this.presentLoading().then(()=>{
            setTimeout(()=>{
              this.loginService.auth(this.registerForm.value.email, this.registerForm.value.password).subscribe(result => {
                let data = JSON.parse(res.body);
                let user =  {
                  id          : data.id,
                  firstname   : data.firstname,
                  lastname    : data.lastname,
                  email       : data.email,
                  password    : data.password,
                };
                this.registerForm.reset();
                this.loginService.setUser(user).then(data => {
                  this.router.navigate(['/tabs/tab4'])
                })
              })
            },3000)
          })
        }
      })
      
    }
  }


  goBack() {
    this.router.navigate(['/landing'])
  }

}
