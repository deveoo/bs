import { Component , OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  id_lang;
  constructor(
    private menuController: MenuController,
    private storage: Storage,
  ) {
    this.menuController.enable(true); // Enable side menu
  }

  ngOnInit(): void {
    this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
    })
  }
  
}
