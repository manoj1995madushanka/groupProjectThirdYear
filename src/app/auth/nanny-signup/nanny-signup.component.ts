import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

export interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-nanny-signup',
  templateUrl: './nanny-signup.component.html',
  styleUrls: ['./nanny-signup.component.scss']
})
export class NannySignupComponent implements OnInit {

  maxDate;

  constructor(private authService: AuthService, private firestore: AngularFirestore) { }

  typesOfNanny: string[] = ['Kids', 'Parents', 'Pets', 'Home'];

  cities: City[] = [
    {value: 'Galle-0', viewValue: 'Galle'},
    {value: 'Colombo-1', viewValue: 'Colombo'},
    {value: 'Kandy-2', viewValue: 'Kandy'}
  ];

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 25);
  }

  onSubmit(form: NgForm) {
    const data = form.value;
    return this.firestore.collection('nanny').add(data);
    //  console.log(form);
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }

}
