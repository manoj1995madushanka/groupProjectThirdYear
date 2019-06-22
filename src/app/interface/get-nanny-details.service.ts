import { Injectable } from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {Nanny} from '../auth/nanny.model';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import {forEach} from "@angular/router/src/utils/collection";


@Injectable({
  providedIn: 'root'
})
export class GetNannyDetailsService {

  finishedExercisesChanged = new Subject<Nanny[]>();
  private fbSubs: Subscription[] = [];
  sname: string;
  semail: string;
  saddress: string;
  snumber: string;
  sgender: string;
  stown: string;
  sjobType: string;
  sbirthdate: string;
  simgurl: string;
  filterTest: string;
  selectedid: string;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
  }

  parseNanny() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.selectedid = user.uid;
      }});
  }

  gotoProfile() {
    // console.log(this.originalNanny.valueOf().name);
    this.router.navigate(['/profile/' + this.selectedid]);
  }

  getNannies() {
    console.log("get nannies");
    this.fbSubs.push(this.db
      .collection('nanny')
      .valueChanges()
      .subscribe((nannies: Nanny[]) => {
        this.finishedExercisesChanged.next(nannies);
      }));
  }

  toProfile(nanny: Nanny) {
    this.sname = nanny.name;
    this.semail = nanny.email;
    this.saddress = nanny.address;
    this.snumber = nanny.number;
    this.sgender = nanny.number;
    this.sgender = nanny.number;
    this.stown = nanny.town;
    this.sjobType = nanny.jobType;
    this.sbirthdate = nanny.birthdate;
    this.simgurl = nanny.imgurl;
  }

}
