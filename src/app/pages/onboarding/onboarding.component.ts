import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {

  constructor(
    public storage : Storage , 
    private router : Router,
  ) { }

  ngOnInit() {
    
  }

  initLang(id:number) {
    this.storage.create().then(()=> {
      this.storage.set('id_lang',id);
      this.storage.get('user').then(user => {
        if(user !== null) {
          this.router.navigate(['/tabs/tab1']);
        }else{
          this.router.navigate(['/landing']);
        }
      })
    })
  }
  
}
