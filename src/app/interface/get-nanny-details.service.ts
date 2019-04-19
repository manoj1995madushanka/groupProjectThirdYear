import { Injectable } from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {Nanny} from '../auth/nanny.model';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class GetNannyDetailsService {

  exerciseChanged = new Subject<Nanny>();
  exercisesChanged = new Subject<Nanny[]>();
  finishedExercisesChanged = new Subject<Nanny[]>();
  private availableExercises: Nanny[] = [];
  private runningExercise: Nanny;
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

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {}

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
    this.fbSubs.push(this.db
      .collection('nanny')
      .valueChanges()
      .subscribe((nannies: Nanny[]) => {
        this.finishedExercisesChanged.next(nannies);
      }));
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
    return this.db.collection('nanny').snapshotChanges();
  }
  getcustomers() {
    return this.db.collection('customers').snapshotChanges();
  }

  setnProfile() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        // logged in or user exists
        console.log(user.uid);
        /*this.db.collection('nanny').doc(user.uid).ref.get()
          .then(doc => {
            if (doc.exists) {
             /!* return doc.data();*!/
              console.log(doc.data());
            } /!*else {
              this.db.collection('customers').doc(user.uid).ref.get()
                .then( doc1 => {
                  /!*return doc1.data();*!/
                  console.log(doc1.data());
                });
            }*!/
          });*/
      } else {/**/
        // not logged in
      }
    });
  }

  /*cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

  private addDataToDatabase(exercise: Exercise) {
    this.db.collection('finishedExercises').add(exercise);
  }*/



}
