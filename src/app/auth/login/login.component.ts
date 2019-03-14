import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('',{
        validators: [Validators.required]
      })
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
   /* this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });*/
  }

}
