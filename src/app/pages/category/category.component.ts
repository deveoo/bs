 import { Component, OnInit } from '@angular/core';
 import { CategoryService } from '../../services/ht/category.service';
 import { Category } from '../../models/category.model';
 import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

 @Component({
   selector: 'app-category',
   templateUrl: './category.component.html',
   styleUrls: ['./category.component.scss'],
 })
 export class CategoryComponent implements OnInit{
 
  id_lang;
  categories = [];
  grid: Boolean = true;
  oneColumn: Boolean = false;
  list: Boolean = false;

   constructor(
    private router: Router,
    private categoryService: CategoryService ,
    private storage: Storage
  ) { }
 
   ngOnInit() {
    this.getCategories().then(() => {
      this.categories.forEach((category , index) => {
        this.categoryService.getImageUrl(category.id).subscribe(data => {
          this.createImageFromBlob(data.body,index);
        })
      });
    });
   }

   getCategories() {
    /*this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
      this.categoryService.getCategories().subscribe(res =>{
        if(res.status === 200){
          let categoriesIDs = res.body['categories'];
          categoriesIDs.forEach(data => {
            this.categoryService.getCategory(data.id).subscribe(res => {
              if(res.status === 200) {
                let category = res.body['category'];
                if(category['id_parent'] == 2 && 
                category.hasOwnProperty('associations') && category.associations.hasOwnProperty('products') &&
                category.associations.products.length > 0) {
                  let category_name = category.name.find(el => el.id == this.id_lang);
                  category.category_name = typeof category_name != 'undefined' ?  category_name : category.name.find(el => el.id == 1);
                  this.homeCategories.push(category)
                }
              } 
            })
          })
        }
      })
    });*/
    return this.storage.get('id_lang').then((id_lang) => {
      this.id_lang = id_lang;
        return new Promise((resolve, reject) => {
            this.categoryService.getFirstLevel().subscribe(res => {
            this.categories = res.body['categories'];
            this.categories.sort(function(a, b){
              if(a.name[id_lang - 1].value < b.name[id_lang - 1].value) { return -1; }
              if(a.name[id_lang - 1].value > b.name[id_lang - 1].value) { return 1; }
              return 0;
          })
            resolve(this.categories);
          }, (error) => reject(error));
        });
    })
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

   // One column view function
   showOneColumn() {
     this.oneColumn = true;
     this.grid = false
     this.list = false;
   }
 
   // Grid view function
   showGrid() {
     this.grid = true;
     this.oneColumn = false;
     this.list = false;
   }
 
   // List view function
   showList() {
     this.list = true;
     this.grid = false;
     this.oneColumn = false;
   }
   

 }
 