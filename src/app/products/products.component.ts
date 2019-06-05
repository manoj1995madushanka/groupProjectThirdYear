import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName = ' ';
  isDisabled = true;
  products =[ ];

  constructor() { 
     setTimeout(()=> {
    //   this.productName='A Tree';
    this.isDisabled = false;
     },3000);
  }

  ngOnInit() {
  }

  onAddProduct(){
    this.products.push(this.productName);
    this.productName="";

  }

}
