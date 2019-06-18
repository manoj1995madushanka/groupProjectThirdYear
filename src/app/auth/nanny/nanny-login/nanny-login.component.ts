import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {PauthService} from '../../pauth.service';

@Component({
  selector: 'app-nanny-login',
  templateUrl: './nanny-login.component.html',
  styleUrls: ['./nanny-login.component.scss']
})
export class NannyLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: PauthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  onSubmit() {
    this.authService.nlogin({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }
}
