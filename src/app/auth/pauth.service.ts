import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFirestore} from '@angular/fire/firestore';

import { Nanny} from './nanny.model';


@Injectable({
  providedIn: 'root'
})
export class PauthService {

  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {}

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
          name: authData.name,
          address: authData.address,
          number: authData.number,
          birthdate: authData.birthdate,
          email: authData.email
        });
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
          name: authData.name,
          address: authData.address,
          number: authData.number,
          email: authData.email
        });
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
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
  }
// customer login
  clogin(authData: Nanny) {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
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
}
