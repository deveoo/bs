import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/ht//category.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  imageToShow: any;
  id_lang;
  categories = [];
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
  };
  constructor(private categoryService: CategoryService ,
    private storage: Storage,
  ) { }


  ngOnInit() {
    /*this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
      this.categoryService.getAll().subscribe(res => {
        let str = res.body.substring(res.body.indexOf('RETURN HTTP BODY</h6><pre>') + 50 , res.body.lastIndexOf(']}') + 1);
        let data = JSON.parse(this.decodeHTML(str));
        data.forEach(item => {
          if(item['id_parent'] == 2 && 
          item.hasOwnProperty('associations') && item.associations.hasOwnProperty('products') &&
          item.associations.products.length > 0) {
          //if(item['id_parent'] != 0 && item['id_parent'] != 2 && item['id_parent'] != 1) {
            item.categoriy_name = item.name.find(el => el.id == this.id_lang).value;
            this.categories.push(item)
          }
        });
      })
    })


    this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
      this.categoryService.getFirstLevel().subscribe(res => {
        if(res.status === 200) {
          this.categories = res.body['categories'];
        }
      })
    })*/

    this.getCategories().then(() => {
      this.categories.forEach((category , index) => {
        this.categoryService.getImageUrl(category.id).subscribe(data => {
          this.createImageFromBlob(data.body,index);
        })
      });
    });
    
    
  }


  getCategories(): Promise<any> {
    return this.storage.get('id_lang').then((id_lang) => {
        this.id_lang = id_lang;
        return new Promise((resolve, reject) => {
            this.categoryService.getFirstLevel().subscribe(res => {
            this.categories = res.body['categories'];
            resolve(this.categories);
          }, (error) => reject(error));
        });
    })
}

  decodeHTML(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  checkImage(url) {
    var request = new XMLHttpRequest();
    var check = false;
    request.open("GET", url, true);
    request.send();
    request.onload = function() {
      check = request.status == 200;
    }
    return check;
  }

  createImageFromBlob(image: Blob,index) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.categories[index].image = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

} 


