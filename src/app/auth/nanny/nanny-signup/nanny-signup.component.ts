import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PauthService} from '../../pauth.service';



@Component({
  selector: 'app-nanny-signup',
  templateUrl: './nanny-signup.component.html',
  styleUrls: ['./nanny-signup.component.scss']
})
export class NannySignupComponent implements OnInit {

  hide = false;
  maxDate;
  /*favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];*/
  gender = ['Male', 'Female'];
  sgender: string;
  age: number;
  nicNo: string;
  nic: number;
  birthMonth: string;
  birthYear: string;
  birthDay: number;
  dayText: number;
  temp = new Date().getFullYear();

  selectedJob: string;
  jobs = [ 'Kids', 'Parents', 'Home' ];

  selectedLocation: string;
  locations = [ 'Galle', 'Matara', 'Colombo', 'Nugegoda' ];


  constructor(private authService: PauthService) {
  }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 25);
  }

  calculateBirth(nicNo) {
    this.nic = parseInt(this.nicNo, 10);
    // this.birthYear = '19' + nicNo.substr(0, 2);
    if (nicNo.length === 10) {
      this.birthYear = '19' + nicNo.substr(0, 2);
      this.dayText = parseInt(nicNo.substr(2, 3), 10);
    } else {
      this.birthYear = nicNo.substr(0, 4);
      this.dayText = parseInt(nicNo.substr(4, 3), 10);
    }
    // set gender
    if (this.dayText > 500) {
      this.sgender = 'Female';
      this.dayText -= 500;
    } else {
      this.sgender = 'Male';
    }
    // calculate date and month
    if (this.dayText > 335) {
      this.birthDay = this.dayText - 335;
      this.birthMonth = 'December';
    } else if (this.dayText > 305) {
      this.birthDay = this.dayText - 305;
      this.birthMonth = 'November';
    } else if (this.dayText > 274) {
      this.birthDay = this.dayText - 274;
      this.birthMonth = 'October';
    } else if (this.dayText > 244) {
      this.birthDay = this.dayText - 244;
      this.birthMonth = 'September';
    } else if (this.dayText > 213) {
      this.birthDay = this.dayText - 213;
      this.birthMonth = 'Auguest';
    } else if (this.dayText > 182) {
      this.birthDay = this.dayText - 182;
      this.birthMonth = 'July';
    } else if (this.dayText > 152) {
      this.birthDay = this.dayText - 152;
      this.birthMonth = 'June';
    } else if (this.dayText > 121) {
      this.birthDay = this.dayText - 121;
      this.birthMonth = 'May';
    } else if (this.dayText > 91) {
      this.birthDay = this.dayText - 91;
      this.birthMonth = 'April';
    } else if (this.dayText > 60) {
      this.birthDay = this.dayText - 60;
      this.birthMonth = 'March';
    } else if (this.dayText < 32) {
      this.birthMonth = 'January';
      this.birthDay = this.dayText;
    } else if (this.dayText > 31) {
      this.birthDay = this.dayText - 31;
      this.birthMonth = 'Febuary';
    }
    this.age = this.temp - parseInt(this.birthYear, 10);
    console.log(' age : ' + this.age);
  }


  onSubmit(form: NgForm) {
    //  console.log(form);
    this.calculateBirth(this.nicNo);
    this.authService.registerUser({
      name: form.value.name,
      address: form.value.address,
      number: form.value.number,
      email: form.value.email,
      password: form.value.password,
      /*birthdate: form.value.birthdate,*/
      birthdate: this.birthYear + ' / ' + this.birthMonth + ' / ' + this.birthDay.toString() ,
      gender: this.sgender,
      jobType: this.selectedJob,
      town: this.selectedLocation,
      age: this.age
    });
    // console.log(birthdate);
    console.log( this.birthYear + ' / ' + this.birthMonth + ' / ' + this.birthDay.toString());
  }
}
