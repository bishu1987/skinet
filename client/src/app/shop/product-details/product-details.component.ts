import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  quantity = 1;

  constructor(private shopService: ShopService,
              private activateRoute: ActivatedRoute,
              private bcService: BreadcrumbService,
              private basketService: BasketService) {
    this.bcService.set('@productDetails', ' ');
  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.loadProduct();
  }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity() {
    if (this.quantity < 5) {
      this.quantity++;
    }
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity --;
    }
  }

  // tslint:disable-next-line: typedef
  loadProduct() {
    const getid = this.activateRoute.snapshot.paramMap.get('id');
    if (getid !== null) {
      this.shopService.getProduct(+getid).subscribe(product => {
        this.product = product;
        this.bcService.set('@productDetails', product.name);
      }, error => {
        console.log(error);
      });
    }
  }

}
