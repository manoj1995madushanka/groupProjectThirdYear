import {Component, OnChanges, OnInit} from '@angular/core';
import {GetNannyDetailsService} from '../get-nanny-details.service';
import {Nanny} from '../../auth/nanny.model';
import {Subject} from 'rxjs';
import {Subscription} from 'rxjs';
import {PauthService} from "../../auth/pauth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  nprofileData: Nanny;
  cprofileData: Nanny[];
  nLoop: Nanny[];
  pronan: Nanny;
  temp: Nanny;

  editMode = false;

  constructor(public auth: PauthService) {
  }
  ngOnInit() {}

}
