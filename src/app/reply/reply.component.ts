import { Component, OnInit, Input } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  @Input() answer:string;
  today= new Date();
  jstoday = '';
  constructor() { 
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    console.log(this.jstoday);
  }

  ngOnInit() {
  }

}
