import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-top-slider',
  templateUrl: './home-top-slider.component.html',
  styleUrls: ['./home-top-slider.component.scss'],
})
export class HomeTopSliderComponent implements OnInit {

  slides;
  // Slider Options
  slideOpts = {
    initialSlide: 0,
    loop: true,
    autoplay: true,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };

  constructor(
    public http: HttpClient,
  ) { }

  ngOnInit() { 
    this.getSlides().subscribe(res => {
      if(res.status === 200) {
        this.slides = res.body;
      }
    })
  }

  isEmpty(obj) {
    for(var prop in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
  }

  getSlides() {
    return this.http.get(
      `https://www.bs.version-recette.com//modules/buqshaMobileSlides/ajax/get.php`,{
        observe:'response',
      });
  }


}
