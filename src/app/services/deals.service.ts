import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor() { }

  getDeals() {
    return [{
      id: 1,
      image: "https://buqsha.linkeys.net/api/images/products/22/386?ws_key=HL6S599LPTE2KSZTW4XJQSYA1HSZL8GT&output_forma=JSON",
      title: "Sale 50%",
      subTitle: "Major pieces for upper half"
    }, {
      id: 2,
      image: "assets/images/products/deal1.jpeg",
      title: "Ease the day",
      subTitle: "Cute knits for taking it easy"
    }, {
      id: 3,
      image: "assets/images/banner-1.jpg",
      title: "Step way",
      subTitle: "Cause you've got places"
    }]
  }
}
