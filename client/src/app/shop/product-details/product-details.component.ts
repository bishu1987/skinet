import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.loadProduct();
  }

  // tslint:disable-next-line: typedef
  loadProduct() {
    const getid = this.activateRoute.snapshot.paramMap.get('id');
    if (getid !== null) {
      this.shopService.getProduct(+getid).subscribe(product => {
        this.product = product;
      }, error => {
        console.log(error);
      });
    }
  }

}
