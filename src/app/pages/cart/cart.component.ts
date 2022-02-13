import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/ht/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  cartProducts = [];
  total = 0;
  constructor(
    public cartService: CartService,
    private router: Router,
    route:ActivatedRoute
  ) { 
    route.params.subscribe(val => {
      this.total = 0;
      this.getProducts();
    });
  }


  ngOnInit() {
    //this.cartService.removeValue('cart')
    //this.getProducts();
  }

  getProducts() {
     this.cartService.getValue('cart').then(data => {
      if(data !== null && data.length > 0) {
        console.log(data)
        this.cartProducts = data;
        this.cartProducts.map(product => {
          this.total += parseFloat(product.price) * parseInt(product.quantity)
        });
      }
    })
  }

  addQuantity(item,index) {
    this.cartProducts[index].quantity++;
    this.cartService.handleItem(this.cartProducts[index],'add');
    this.updateTotal();
    //this.total += parseInt(this.cartProducts[index].quantity) * parseInt(this.cartProducts[index].price)
  }

  updateTotal() {
    this.total = 0;
    this.cartProducts.forEach(element => {
      this.total += parseInt(element.quantity) * parseInt(element.price)
    });
  }

   minusQuantity(item,index) {
    if(this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--; 
      this.cartService.handleItem(this.cartProducts[index],'minus');
      this.total = this.total - this.cartProducts[index].price
    }
  }

  removeProduct(item,index) {
    this.cartService.removeProduct(this.cartProducts[index]).then(() => {
      this.getProducts();
      this.updateTotal();
    })
  }

  dismiss() {
    this.router.navigate(['/tabs/tab1']);
  }
  
  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
