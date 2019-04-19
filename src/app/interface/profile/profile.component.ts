import { Component, OnInit } from '@angular/core';
import {GetNannyDetailsService} from '../get-nanny-details.service';
import {Nanny} from '../../auth/nanny.model';
import {Subject} from "rxjs";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileData: Nanny[];

  constructor(private profile: GetNannyDetailsService) { }

  ngOnInit() {
    this.profile.getnannies().subscribe(data => {
      this.profileData = data.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()};
      });
    });
  }

}
