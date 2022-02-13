import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  id_lang;
  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.create().then(()=> {
      this.storage.get('id_lang').then(id_lang => {
        this.id_lang = id_lang;
      });
    })
   }

}
