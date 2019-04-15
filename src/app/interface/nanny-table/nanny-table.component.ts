import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GetNannyDetailsService} from "../get-nanny-details.service";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Subscription} from "rxjs";
import {Nanny} from "../../auth/nanny.model";

@Component({
  selector: 'app-nanny-table',
  templateUrl: './nanny-table.component.html',
  styleUrls: ['./nanny-table.component.scss']
})
export class NannyTableComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns = ['name', 'gender', 'town', 'viewProfile'];
  dataSource = new MatTableDataSource<Nanny>();
  private nChangedSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private trainingService: GetNannyDetailsService) {}

  ngOnInit() {
    this.nChangedSubscription = this.trainingService.finishedExercisesChanged.subscribe(
      (exercises: Nanny[]) => {
        this.dataSource.data = exercises;
      }
    );
    this.trainingService.fetchCompletedOrCancelledExercises();
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


}
