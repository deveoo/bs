import { Component, OnInit } from '@angular/core';
import { DealsService } from '../../services/deals.service';
import { CategoryService } from '../../services/category.service';
import { Image } from '../../models/image.model';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.scss'],
})
export class HotDealsComponent implements OnInit {
  
  id_lang;
  images = [];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
  };

  constructor(
    private categoryService: CategoryService , 
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
    })
    this.images = [
      {
        id: "https://www.bs.version-recette.com//img/cms/1638457647649.png",
        name: "Rasha Alneamy"
      },
      {
        id: "https://www.bs.version-recette.com//img/cms/1638457619687.png",
        name: "Nana",
      },
      {

        id: "https://www.bs.version-recette.com//img/cms/1638457606770.png",
        name: "Muna Artist",
      },
      {
  
        id: "https://www.bs.version-recette.com//img/cms/1638457582567.png",
        name: "Blogger ShoSho"
      }
    ];
  }
 


}
