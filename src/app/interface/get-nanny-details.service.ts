import { Injectable } from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {Nanny} from '../auth/nanny.model';
import {AngularFirestore} from '@angular/fire/firestore';

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

  constructor(private db: AngularFirestore) {}

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

  fetchCompletedOrCancelledExercises() {
    this.fbSubs.push(this.db
      .collection('nanny')
      .valueChanges()
      .subscribe((exercises: Nanny[]) => {
        this.finishedExercisesChanged.next(exercises);
      }));
  }

  /*cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

  private addDataToDatabase(exercise: Exercise) {
    this.db.collection('finishedExercises').add(exercise);
  }*/

}
