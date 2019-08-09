import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {PauthService} from '../../pauth.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LoginErrorComponent} from '../../login-error/login-error.component';


@Component({
  selector: 'app-nanny-login',
  templateUrl: './nanny-login.component.html',
  styleUrls: ['./nanny-login.component.scss']
})
export class NannyLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: PauthService, public dialog: MatDialog) { }

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
      password: this.loginForm.value.password,
    });
    this.doCheck();

  }

  doCheck() {
    if (this.authService.errorMessage === true) {
      this.loginForm.value.password = '';
      const dialogRef = this.dialog.open(LoginErrorComponent, {
        width: '250px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
}
