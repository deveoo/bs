import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Image } from '../models/image.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Association } from '../models/associations.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   lien: String;
   categories: Category[] = [];
   imageCelb: Image[] = [];
   imageCat: Image[] = [];
   association: Association;

  constructor(private http: HttpClient) { }
   
  getCategories(){
    return this.http.get(`${environment.apiUrl}categories?ws_key=${environment.ws_key}`,{
    observe:'response'});
  }

  getCategory(id_category){
    return this.http.get(`${environment.apiUrl}categories/${id_category}?ws_key=${environment.ws_key}`,{
    observe:'response'});
  }

  getCategoryProducts(id_product) {
    return this.http.get(`${environment.apiUrl}products/${id_product}?ws_key=${environment.ws_key}`,{
    observe:'response'});
  }


  getMe():Observable<HttpResponse<User>>{
    let token= "Token d4801aefa979de9aff4a3699f112e4cabbe9cb66"
    let header = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.get<User>('https://mydocuments.tn/api/v1/users/me/',{
        headers: header, observe:'response'});
    }
  
  getSubCategories(){
    return this.categories;
  }
  setSubCategories(categories: Category[]){
    this.categories=categories;
  }
  getAssociation(){
    return this.association;
  }
  setAssociation(association: Association){
    this.association=association;
  }
  imagesCelib() {
    this.imageCelb = [
      {
        id: "https://buqsha.linkeys.net/img/cms/celeb-icons_458.jpg"
      },
      {
        id: "https://buqsha.linkeys.net/img/cms/celeb-icons_400.jpg"
      },
      {

        id: "https://buqsha.linkeys.net/img/cms/layali-makeover-celeb-icons.jpg"
      },
      {
  
        id: "https://buqsha.linkeys.net/img/cms/celeb-icons_488.jpg"
      },
      {
        
        id: "https://buqsha.linkeys.net/img/cms/icon_170.jpg"
      }
    ];

    return this.imageCelb;
  }
  getCategoriHome(){
    this.categories = [
        {
            "id": 10,
            "id_parent": "2",
            "level_depth": "2",
            "nb_products_recursive": "3",
            "active": "1",
            "id_shop_default": "https://buqsha.linkeys.net/img/cms/men.jpg",
            "is_root_category": "0",
            "position": "0",
            "date_add": "2021-01-31 18:01:48",
            "date_upd": "2021-02-26 20:57:27",
            "name": [
                {
                    "id": "1",
                    "value": "MEN"
                },
                {
                    "id": "2",
                    "value": "الرجل"
                }
            ],
            "link_rewrite": [
                {
                    "id": "1",
                    "value": "men"
                },
                {
                    "id": "2",
                    "value": "men"
                }
            ],
            "description": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "meta_title": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "meta_description": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "meta_keywords": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "associations": {
                "categories": [
                    {
                        "id": "11"
                    },
                    {
                        "id": "12"
                    },
                    {
                        "id": "13"
                    }
                ],
                "products": [
                    {
                        "id": "21"
                    },
                    {
                        "id": "20"
                    },
                    {
                        "id": "44"
                    }
                ]
            }
        },
        {
            "id": 14,
            "id_parent": "2",
            "level_depth": "2",
            "nb_products_recursive": "5",
            "active": "1",
            "id_shop_default": "https://buqsha.linkeys.net/img/cms/pexels-gabriela-guerino-1839904.jpg",
            "is_root_category": "0",
            "position": "1",
            "date_add": "2021-01-31 18:18:41",
            "date_upd": "2021-02-26 20:57:52",
            "name": [
                {
                    "id": "1",
                    "value": "WOMEN"
                },
                {
                    "id": "2",
                    "value": "المرأة"
                }
            ],
            "link_rewrite": [
                {
                    "id": "1",
                    "value": "women"
                },
                {
                    "id": "2",
                    "value": "women"
                }
            ],
            "description": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "meta_title": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "meta_description": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "meta_keywords": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "associations": {
                "categories": [
                    {
                        "id": "15"
                    },
                    {
                        "id": "16"
                    },
                    {
                        "id": "17"
                    }
                ],
                "products": [
                    {
                        "id": "21"
                    },
                    {
                        "id": "20"
                    },
                    {
                        "id": "44"
                    },
                    {
                        "id": "90"
                    },
                    {
                        "id": "120"
                    }
                ]
            }
        },
        {
            "id": 18,
            "id_parent": "2",
            "level_depth": "2",
            "nb_products_recursive": "1",
            "active": "1",
            "id_shop_default": "https://buqsha.linkeys.net/img/cms/pexels-emma-bauso-2833394.jpg",
            "is_root_category": "0",
            "position": "2",
            "date_add": "2021-01-31 18:22:55",
            "date_upd": "2021-02-26 20:58:14",
            "name": [
                {
                    "id": "1",
                    "value": "KIDS"
                },
                {
                    "id": "2",
                    "value": "الطفل"
                }
            ],
            "link_rewrite": [
                {
                    "id": "1",
                    "value": "kids"
                },
                {
                    "id": "2",
                    "value": "kids"
                }
            ],
            "description": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "meta_title": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "meta_description": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "meta_keywords": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "associations": {
                "categories": [
                    {
                        "id": "23"
                    },
                    {
                        "id": "24"
                    },
                    {
                        "id": "25"
                    }
                  ],
                "products": [
                    {
                        "id": "44"
                    }
                  ]
            }
        }
   
    ];

    return this.categories;
  }

}
