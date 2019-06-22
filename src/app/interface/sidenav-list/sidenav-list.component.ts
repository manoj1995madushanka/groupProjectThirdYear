import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {PauthService} from "../../auth/pauth.service";
import {GetNannyDetailsService} from "../get-nanny-details.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  authSubscription: Subscription;
  isAuth = false;

  constructor(private authService: PauthService,  private profileSetup: GetNannyDetailsService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.authService.logout();
    this.onClose();
  }

  goProfile() {
    this.profileSetup.gotoProfile();
  }

}
