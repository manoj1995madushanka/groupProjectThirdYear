import { Component, OnInit } from '@angular/core';
import {GetNannyDetailsService} from '../get-nanny-details.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nprofile',
  templateUrl: './nprofile.component.html',
  styleUrls: ['./nprofile.component.scss']
})
export class NprofileComponent implements OnInit {
  name: string;
  address: string;
  number: string;
  gender: string;
  town: string;
  jobType: string;
  birthdate: Date;
  imgurl: string;
  email: string;

  constructor(private detailService: GetNannyDetailsService, private router: Router) { }

  ngOnInit() {
    this.name = this.detailService.sname;
    this.address = this.detailService.saddress;
    this.number = this.detailService.snumber;
    this.gender = this.detailService.sgender;
    this.town = this.detailService.stown;
    this.jobType = this.detailService.sjobType;
    this.birthdate = this.detailService.sbirthdate;
    this.imgurl = this.detailService.simgurl;
    this.email = this.detailService.semail;
  }

}
