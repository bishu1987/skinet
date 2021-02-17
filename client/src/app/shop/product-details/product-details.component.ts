import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute, private bcService: BreadcrumbService) {
    this.bcService.set('@productDetails', ' ');
  }
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
        this.bcService.set('@productDetails', product.name);
      }, error => {
        console.log(error);
      });
    }
  }

}
