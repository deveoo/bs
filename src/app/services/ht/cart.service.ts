import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Product{
  id:Number,
  name:string,
  description:string,
  price:Number,
  quantity:Number,
  img:string,
}

export interface Cart{  
  products:Product[],
  total:number,
  totalQty:number,
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http: HttpClient,public storage : Storage) { }

  handleItem(item:any,op:any) {
    return new Promise(resolve => {
      this.storage.get('cart').then((CartStorage) => { 
       let newItem:Product = {
        id          : item.id,
        name        : item.name,
        description : item.description,
        price       : item.price,
        img         : item.img,
        quantity    : 1,
      };
      let tempCartStorage = CartStorage;
      if(tempCartStorage != null){
        let updateItem = tempCartStorage.find(item => item.id === newItem.id);
        if(updateItem == null){
          tempCartStorage.push(newItem);
        }else{
          updateItem.quantity = op == 'add' ? Number(updateItem.quantity) + 1 : Number(updateItem.quantity) - 1;
          var key:number = tempCartStorage.indexOf(updateItem);
          tempCartStorage[key] = updateItem;
        }
      }else{
        tempCartStorage = [newItem];
      }
      this.setValue('cart',tempCartStorage);
      resolve(tempCartStorage);
      });
    })
  }

  getValue(key: string): Promise<any> {
    return this.storage.get(key);
  }

  setValue(key: string,data: any): Promise<any> {
    return this.storage.set(key,data);
  }

  removeValue(key: string): Promise<any> {
    return this.storage.remove(key);
  }

  updateCart(pr:Product) {
    return new Promise(resolve => {
      this.storage.get('cart').then((CartStorage) => { 
          let tempCartStorage = CartStorage;
          let searchItem = tempCartStorage.find(item => item.id === pr.id);
          if(pr != null) {
            var key:number = tempCartStorage.indexOf(searchItem);
            tempCartStorage[key].quantity--;
            this.setValue('cart',tempCartStorage);
            resolve(tempCartStorage);
          }
      })
    })
  }

  removeProduct(pr:Product) {
    return new Promise(resolve => {
      this.storage.get('cart').then((CartStorage) => { 
          let tempCartStorage = CartStorage;
          let searchItem = tempCartStorage.find(item => item.id === pr.id);
          if(pr != null) {
            var key:number = tempCartStorage.indexOf(searchItem);
            tempCartStorage.splice(key,1);
            this.setValue('cart',tempCartStorage);
            resolve(tempCartStorage);
          }
      })
    })
  }
  
}
