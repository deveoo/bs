import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {

  id_lang;
  constructor(private router: Router , private storage: Storage) { }

  ngOnInit() {
    this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
    })
   }

  async gotoSearchPage() {
    this.router.navigate(['/tabs/search']);
  }

}
