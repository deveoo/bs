import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

export interface User {
  id:Number,
  firstname:string,
  lastname:string,
  email:string,
  password:string,
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public http: HttpClient,
    public storage : Storage
  ) { }

  auth(email,password) {
    return this.http.get(
      `https://www.bs.version-recette.com/ws/login.php?email=${email}&password=${password}`,{
        observe:'response',
        responseType: 'text'
      });
  }

  setUser(user:any) {
    return new Promise(resolve => {
      this.storage.get('user').then((userStorage) => { 
       let newUser: User = {
        id          : user.id,
        firstname   : user.firstname,
        lastname    : user.lastname,
        email       : user.email,
        password    : user.password,
      };
      let tempUserStorage = userStorage;
      if(tempUserStorage == null){
        tempUserStorage = [newUser];
      }
      this.setValue('user',tempUserStorage);
      resolve(tempUserStorage);
      });
    })
  }

  getUser() {
    return new Promise(resolve => {
      this.storage.get('user').then((user) => { 
        resolve(user);
      })
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

  getAddresses() {
    return this.http.get(`https://www.bs.version-recette.com/api/addresses?ws_key=${environment.ws_key}&output_format=JSON&display=full`);
  }
 
}

