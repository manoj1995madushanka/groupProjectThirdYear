import { Component, OnInit } from '@angular/core';
import { state } from '@angular/animations';

@Component({
  selector: 'app-give-service',
  templateUrl: './give-service.component.html',
  styleUrls: ['./give-service.component.scss']
})
export class GiveServiceComponent implements OnInit {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  public Name="Tom Riddle";
  public description="Hi, I'm tom. how can I help you.";
  public notification=10;
  public email=15;
  public emails:string;
  public requests=3;
  public state="I'm free";
  public img_url="assets/img/pic4.jpeg";


  mailnum(){
    if(this.email>9){
      this.emails="9+";
    } return this.emails;
  }

  changestate(){
    if(this.state==="I'm free"){
      this.state="I'm working";
    }
    else{
      this.state="I'm free";
    }
    return state;
  }


  constructor() { }

  ngOnInit() {
  }

 

}
