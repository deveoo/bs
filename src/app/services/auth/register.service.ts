import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    public http: HttpClient,
    public storage : Storage
  ) { } 

  createUser(firstname:String, lastname:String,email:String,password:String) {
    return this.http.get(
      `${environment.baseUrl}ws/create.php?firstname=${firstname}&lastname=${lastname}&email=${email}&passwd=${password}`,{
        observe:'response',
        responseType: 'text'
      });
  }
}

