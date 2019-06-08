import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import { Nanny} from './nanny.model';
import {Observable, of} from "rxjs";
import {switchMap} from "rxjs/operators";
import {User} from "firebase";
import {Customer} from "./customer.model";


@Injectable({
  providedIn: 'root'
})
export class PauthService {

  user: Observable<Nanny>;
  customer: Observable<Nanny>;
  currentUserID: string;
  currentUserName: string;
  selectedUserName: string;
  selectedUserDoc: AngularFirestoreDocument<any>;
  currentUserDoc: AngularFirestoreDocument<any>;

  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {

          return this.db.doc<Nanny>(`nanny/${user.uid}`).valueChanges()  ;
        } else {
          return of(null);
        }
      })
    );
    this.customer = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc<Nanny>(`customers/${user.uid}`).valueChanges()  ;
        } else {
          return of(null);
        }
      })
    );
    }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/']);
      } else {
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

// nanny registration
  registerUser(authData: Nanny) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.db.collection('nanny').doc(result.user.uid).set({
          Id: result.user.uid,
          name: authData.name,
          address: authData.address,
          number: authData.number,
          birthdate: authData.birthdate,
          email: authData.email,
          gender: authData.gender,
          jobType: authData.jobType,
          town: authData.town
        });
        this.currentUserID = result.user.uid;
        this.currentUserName = authData.name;
        this.currentUserDoc = this.db.collection('nanny').doc(result.user.uid);
        console.log(result);
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
  }
// customer registration
  registerCustomer(authData: Nanny) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.db.collection('customers').doc(result.user.uid).set({
          Id: result.user.uid,
          name: authData.name,
          address: authData.address,
          number: authData.number,
          email: authData.email
        });
        this.currentUserID = result.user.uid;
        this.currentUserName = authData.name;
        this.currentUserDoc = this.db.collection('customers').doc(result.user.uid);
        console.log(result);
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
  }
// nanny login
  nlogin(authData: Nanny) {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.currentUserID = result.user.uid;
        this.currentUserDoc = this.db.collection('nanny').doc(result.user.uid);
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
    this.currentUserName = authData.name;
  }
// customer login
  clogin(authData: Nanny) {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.currentUserID = result.user.uid;
        this.currentUserDoc = this.db.collection('customers').doc(result.user.uid);
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
    this.currentUserName = authData.name;
  }

  logout() {
    this.currentUserName = '';
    this.currentUserID = '';
    this.isAuthenticated = false;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  isAuth() {
    return this.isAuthenticated;
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/']);
  }



  updateNannyData(nanny: Nanny) {

    console.log(nanny.name);
    console.log(nanny.address);
    console.log(nanny.jobType);
    console.log(nanny.bio);
    if (nanny.hourlyRate === '') {
      this.db.collection('customers').doc(this.currentUserID).update({
        name: nanny.name,
        number: nanny.number,
        address: nanny.address,
        town: nanny.town,
        availability: nanny.availability,
      }).then(() => {
        console.log('updated');
      });
    } else {
      this.db.collection('nanny').doc(this.currentUserID).update({
        name: nanny.name,
        number: nanny.number,
        address: nanny.address,
        town: nanny.town,
        jobType: nanny.jobType,
        hourlyRate: nanny.hourlyRate,
        availability: nanny.availability,
        bio: nanny.bio
      }).then(() => {
        console.log('updated');
      });
    }

    // Sets user data to firestore on login

    /*const userRef: AngularFirestoreDocument<any> = this.db.doc(`nanny/${user.uid}`);

    const data: Nanny = {
      /!*uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL*!/
      name: user.name,
      number: user.number,
      jobType: user.jobType,
      town: user.town,
      hourlyRate: user.hourlyRate,
      availability: user.availability,
      address: user.address,
      bio: user.bio
    }

    return userRef.set(data, { merge: true });*/

  }

  updateCustomerData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.db.doc(`customers/${user.uid}`);


    const data: Nanny = {
      /*uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL*/
      name: user.name,
      number: user.number,
      town: user.town,
      address: user.address,
      bio: user.bio
    }

    return userRef.set(data, { merge: true });

  }


}
