import { Component, OnInit } from '@angular/core';
import { PauthService } from '../../auth/pauth.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {


  constructor(public auth: PauthService) { }

  ngOnInit() {
  }

}
