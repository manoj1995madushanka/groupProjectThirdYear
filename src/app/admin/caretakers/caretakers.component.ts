import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Admininfo } from '../admininfo';
import { AdminserviceService } from '../adminservice.service';
import { PauthService } from 'src/app/auth/pauth.service';
import {DataSource} from '@angular/cdk/collections';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-caretakers',
  templateUrl: './caretakers.component.html',
  styleUrls: ['./caretakers.component.scss']
})
export class CaretakersComponent implements OnInit {
  nannies: Observable<Admininfo[]>

  dataSource = new UserDataSource(this.adminserviceService);
  displayedColumns = ['name', 'email', 'jobType', 'number'];


  

  constructor(private adminserviceService: AdminserviceService, public auth: PauthService) { 
     
  }

  ngOnInit() {
    this.nannies = this.adminserviceService.getNanny()
    console.log(this)

  }




  
}


export class UserDataSource extends DataSource<any> {
  constructor(private adminserviceService: AdminserviceService) {
    super();
  }
  connect(): Observable<Admininfo[]> {
    return this.adminserviceService.getNanny();
  }
  disconnect() {}
}

