import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

 export class AppComponent implements OnInit{
  title = 'Skinet';
  constructor(){}

  // tslint:disable-next-line: typedef
  ngOnInit() {
  //   this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe(
  //   // response: IPagination) => {  Error Due to Ipagination
  //   (response: any) => {
  //     this.products = response.data;
  //   }, error => {
  //     console.log(error);
  // });
  }
}

