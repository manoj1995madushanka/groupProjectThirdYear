import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PauthService} from "../../pauth.service";
import {LoginErrorComponent} from "../../login-error/login-error.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.scss']
})
export class CloginComponent implements OnInit {

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
    this.authService.clogin({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
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
