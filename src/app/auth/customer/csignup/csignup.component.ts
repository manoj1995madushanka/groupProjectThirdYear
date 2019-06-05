import { Component, OnInit } from '@angular/core';
import {PauthService} from "../../pauth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-csignup',
  templateUrl: './csignup.component.html',
  styleUrls: ['./csignup.component.scss']
})
export class CsignupComponent implements OnInit {

  hide = false;

  constructor(private authService: PauthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    //  console.log(form);
    this.authService.registerCustomer({
      name: form.value.name,
      address: form.value.address,
      number: form.value.number,
      email: form.value.email,
      password: form.value.password
    });
  }

}
