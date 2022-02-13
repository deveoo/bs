import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeFeaturedProductsModalComponent } from '../../components/home-featured-products-modal/home-featured-products-modal.component';
import { ProductService } from '../../services/ht/product.service';
import { Router , ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {

  id_lang;
  products = [];

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
  };

  constructor(
    private productService: ProductService,
    private modalController: ModalController,
    private router: Router,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.storage.get('id_lang').then(id_lang => {
      this.id_lang = id_lang;
      this.productService.getFeatured(id_lang).subscribe(res => {
        Object.values(res.body).forEach((product,index) => {
          let cover_id = product.cover_image_id;
          let cover_url = 'https://www.bs.version-recette.com/img/p';
          cover_id.split('').forEach((item,index) => {
            
            cover_url += index == cover_id.split('').length ? `/${item}/` : `/${item}`;
          })
          cover_url += `/${cover_id}.jpg`;
          product.cover_url = cover_url;
          this.products.push(product);
        });
      })
    })
          
  }

  goToProductDetails(id) {
    this.router.navigate(['categoryProduct',id]);
  }

  decodeHTML(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

}
