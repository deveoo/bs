import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
   
  getProduct(id_product){
    return this.http.get(
      `${environment.apiUrl}products/${id_product}?ws_key=${environment.ws_key}&output_format=JSON`,{
        observe:'response'
      });
  }

  getImage(id_product,id_image): Observable<Blob> {
    let imageUrl = `${environment.apiUrl}images/products/${id_product}/${id_image}?ws_key=${environment.ws_key}`;
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  getProducts() {
    return this.http.get(
      `https://www.bs.version-recette.com/ws/products.php`,{
      observe:'response',
      responseType: 'text'
    });
    /*return this.http.get(
      `${environment.apiUrl}products?ws_key=${environment.ws_key}`,{
        observe:'response'
      });*/
  }

  getFeatured(id_lang) {
    return this.http.get(`https://www.bs.version-recette.com/module/featuredcategory/fproducts?id_lang=${id_lang}`,{
      observe: 'response'
    })
  }
}
