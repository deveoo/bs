import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  getPages(id_lang: number) {
    if(id_lang == 1) {
      return [
        {
          title: 'Home',
          url: '/tabs/tab1',
          icon: 'home'
        },
        {
          title: 'Categories',
          url: '/tabs/tab2',
          icon: 'grid'
        },
        {
          title: 'Cart',
          url: '/cart',
          icon: 'cart'
        },
        {
          title: 'Checkout',
          url: '/checkout',
          icon: 'checkbox'
        },
        {
          title: 'Search',
          url: '/tabs/search',
          icon: 'search'
        }
      ];
    }else{
      return [
        {
          title: 'الصفحة الرئيسية',
          url: '/tabs/tab1',
          icon: 'home'
        },
        {
          title: 'التصنيفات',
          url: '/tabs/tab2',
          icon: 'grid'
        },
        {
          title: 'عربة التسوق',
          url: '/cart',
          icon: 'cart'
        },
        {
          title: 'الدفع',
          url: '/checkout',
          icon: 'checkbox'
        },
        {
          title: 'بحث',
          url: '/tabs/search',
          icon: 'search'
        }
      ];
    }
    
  }
}
