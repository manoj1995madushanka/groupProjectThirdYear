import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GetNannyDetailsService} from "../get-nanny-details.service";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Subscription} from "rxjs";
import {Nanny} from "../../auth/nanny.model";
import {Router, RouterModule} from "@angular/router";
import {PauthService} from "../../auth/pauth.service";
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

@Component({
  selector: 'app-nanny-table',
  templateUrl: './nanny-table.component.html',
  styleUrls: ['./nanny-table.component.scss']
})
export class NannyTableComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns = ['name', 'gender', 'town', 'viewProfile'];
  dataSource = new MatTableDataSource<Nanny>();
  private nChangedSubscription: Subscription;
  selectedJob: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private trainingService: GetNannyDetailsService,
              private router: Router,
              private authS: PauthService,
              public db: AngularFirestore) {

  }

  ngOnInit() {
    this.nChangedSubscription = this.trainingService.finishedExercisesChanged.subscribe(
      (nannies: Nanny[]) => {
        this.dataSource.data = nannies;
      }
    );
    this.trainingService.getNannies();
    this.selectedJob = this.trainingService.filterTest;
    this.dataSource.filter = this.selectedJob;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.nChangedSubscription.unsubscribe();
  }

  goProfile(nanny) {
    console.log(nanny.Id);
    console.log("current id "+ this.authS.currentUserID);
    this.authS.selectedUserDoc = this.db.collection('nanny').doc(nanny.Id);
    this.router.navigate(['/ntable/nprofile', nanny.name]);
    this.trainingService.toProfile(nanny);
  }


}
