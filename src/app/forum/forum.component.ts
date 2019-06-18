import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  productName = ' ';
  isDisabled = true;
  products = [];

  constructor() {
    setTimeout(() => {
      //   this.productName='A Tree';
      this.isDisabled = false;
    }, 3000 );
  }

  ngOnInit() {
  }

  onAddProduct() {
    this.products.push(this.productName);
    this.productName = '' ;

  }

}
