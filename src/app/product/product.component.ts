import { Component, OnInit, Input } from '@angular/core';
import {formatDate } from '@angular/common';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productName: string;
  answer = ' ';
  reply = []
  today= new Date();
  jstoday = '';
  constructor() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    console.log(this.jstoday);
   }

  ngOnInit() {
  const now = new Date();

  }
  onAddReply() {
    this.reply.push(this.answer);
    this.answer = "";
  }

}
