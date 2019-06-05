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

  exerciseChanged = new Subject<Nanny>();
  exercisesChanged = new Subject<Nanny[]>();
  finishedExercisesChanged = new Subject<Nanny[]>();
  private availableExercises: Nanny[] = [];
  runningExercise: Nanny;
  private fbSubs: Subscription[] = [];
  private currentUser: Nanny;
  sname: string;
  semail: string;
  saddress: string;
  snumber: string;
  sgender: string;
  stown: string;
  sjobType: string;
  sbirthdate: Date;
  simgurl: string;
  filterTest: string;
  selectedid: string;
  originalNanny = new Subject<Nanny>();
  oNanny: Subscription[] = [];

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
  }

  parseNanny() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.selectedid = user.uid;
        /*this.oNanny = this.db.collection('nanny').doc(user.uid).ref.get()
          .then((response) => {
            return response.data() as Nanny; });*/
        /*this.db.collection('nanny').doc(user.uid).snapshotChanges().subscribe((data2: Nanny) => {
          this.exerciseChanged.next(data2);
        });*/
        /*this.oNanny = this.db.collection('nanny').doc(user.uid).snapshotChanges().subscribe(user1 => {
          return {
            nannyId : user1.payload.id,
            ...user1.payload.data
          } as Nanny;
        });*/
        /*this.db.collection('nanny').doc(this.selectedid).ref.get().then(data1 => {
          // console.log('Document data:', data1.data());
          if (data1.exists) {
            console.log('Document data:', data1.data() );
            this.runningExercise = data1 as Nanny;
             // {{account['accountId']}}
            /!*this.oNanny.name = data1.get(name);*!/
          }
        });*/
      }});
  }

  gotoProfile() {
    // console.log(this.originalNanny.valueOf().name);
    this.router.navigate(['/profile/' + this.selectedid]);
  }

  /*fetchAvailableExercises() {
    this.fbSubs.push(this.db
      .collection('availableExercises')
      .snapshotChanges()
      .map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            name: doc.payload.doc.data().name,
            duration: doc.payload.doc.data().duration,
            calories: doc.payload.doc.data().calories
          };
        });
      })
      .subscribe((exercises: Exercise[]) => {
        this.availableExercises = exercises;
        this.exercisesChanged.next([...this.availableExercises]);
      }));
  }

  startExercise(selectedId: string) {
    // this.db.doc('availableExercises/' + selectedId).update({lastSelected: new Date()});
    this.runningExercise = this.availableExercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  completeExercise() {
    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.addDataToDatabase({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }*/


  getNannies() {
    const s: Subject<Nanny> = new Subject();
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {

        this.db.collection('nanny').doc(user.uid).get().subscribe(
          next => {
            s.next(next.data());
          });
      }
    });
    return s as Observable<Nanny>;
    /*this.fbSubs.push(this.db
      .collection('nanny')
      .valueChanges()
      .subscribe((nannies: Nanny[]) => {
        this.finishedExercisesChanged.next(nannies);
      }));*/
    /*this.db.collection('nanny').snapshotChanges().subscribe((nannies: Nanny[]) =>
    this.finishedExercisesChanged.next(nannies));*/
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

  getnannies() {
    return this.db.collection('nanny').doc(this.selectedid).valueChanges() as Nanny;
  }
  getcustomers() {
    return this.db.collection('customers').snapshotChanges();
  }


}
