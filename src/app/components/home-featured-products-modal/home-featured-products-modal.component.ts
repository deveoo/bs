import { Component, OnInit , Input } from '@angular/core';
import { ProductService } from '../../services/ht/product.service';
import { ModalController } from '@ionic/angular';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-featured-products-modal',
  templateUrl: './home-featured-products-modal.component.html',
  styleUrls: ['./home-featured-products-modal.component.scss'],
})
export class HomeFeaturedProductsModalComponent implements OnInit {

  constructor(
    private productService: ProductService , 
    private modalController: ModalController,
    private router: Router,
  ) { }

  @Input("value") id;
  product = [];
  ngOnInit() {
    this.getProduct(this.id)
  }

  getProduct(id) {
       this.productService.getProduct(id).subscribe(res => {
        if(res.status === 200) {
          let product = res.body['product'];
          if(product.active == "1") {
            this.product['id'] = product.id;
            this.product['name'] = product.name[0].value;
            this.product['description'] = product.description_short[0].value;
            this.product['price'] = product.price;
            if(product.associations.hasOwnProperty('images') && 
            product.associations.images.length > 0) {
              let imageIds = product.associations.images[0].id.split('');
              let mainImage = 'https://www.bs.version-recette.com/img/p/';
              imageIds.forEach(id => {
                mainImage += `${id}/`
              });
              this.product['mainImage'] = `${mainImage}${product.associations.images[0].id}.jpg`;
            }
          }
        } 
      })
  }

  dismiss() {
    this.router.navigate(['/tabs/tab1']);
  }
}
