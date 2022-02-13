import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})  

export class CategoryService {
  
  constructor(private http: HttpClient) { }
   
  getCategories(){
    return this.http.get(
      `${environment.apiUrl}categories?ws_key=${environment.ws_key}&output_format=JSON`,{
        observe:'response'
      });
  }

  getCategory(id_category){
    return this.http.get(
      `${environment.apiUrl}categories/${id_category}?ws_key=${environment.ws_key}&output_format=JSON`,{
      observe:'response'
    });
  }

  getImage(id_category): Observable<Blob> {
    let imageUrl = `${environment.apiUrl}images/categories/${id_category}?ws_key=${environment.ws_key}`;
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  getAll() {
    return this.http.get(
      `https://www.bs.version-recette.com/ws/categories.php`,{
      observe:'response',
      responseType: 'text'
    });
  }

  getFirstLevel() {
    return this.http.get(
      `https://www.bs.version-recette.com/api/categories/?output_format=JSON&filter[active]=1&display=[id,name]&filter[id_parent]=2&ws_key=HL6S599LPTE2KSZTW4XJQSYA1HSZL8GT`,{
      observe:'response', 
    });
  }

  getImageUrl(id) {
    return this.http.get(`https://bs.version-recette.com/ws/images.php?img-url=https://www.buqshastore.com/img/c/${id}.jpg`,{
      observe: 'response',
      responseType: 'blob'
    });
  }
}
