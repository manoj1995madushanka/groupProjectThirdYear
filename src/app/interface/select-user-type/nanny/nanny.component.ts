import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {Nanny} from '../../../auth/nanny.model';
import {GetNannyDetailsService} from '../../get-nanny-details.service';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-nanny',
  templateUrl: './nanny.component.html',
  styleUrls: ['./nanny.component.scss']
})
export class NannyComponent implements OnInit {

  private nChangedSubscription: Subscription;
  dataSource = new MatTableDataSource<Nanny>();

  constructor(private trainingService: GetNannyDetailsService, private router: Router) { }

  ngOnInit() {

  }


  forHomes() {
    this.trainingService.filterTest = 'Home';
  }

  forPets() {
    this.trainingService.filterTest = 'Pets';
  }

  forKids() {
    this.trainingService.filterTest = 'Kids';
  }

  forParents() {
    this.trainingService.filterTest = 'Parents';
  }
}
