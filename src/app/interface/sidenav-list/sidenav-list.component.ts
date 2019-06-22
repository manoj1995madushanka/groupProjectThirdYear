import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {PauthService} from "../../auth/pauth.service";
import {GetNannyDetailsService} from "../get-nanny-details.service";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private authService: PauthService,  private profileSetup: GetNannyDetailsService) { }

  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout(){
    this.authService.logout();
    this.onClose();
  }

  goProfile() {
    this.profileSetup.gotoProfile();
  }

}
