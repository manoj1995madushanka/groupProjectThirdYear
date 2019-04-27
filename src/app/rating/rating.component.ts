import { Component, OnInit } from '@angular/core';
import {RatingService} from "../rating.service";
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {PauthService} from "../auth/pauth.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  selectedUser: Observable<any>;
  currentUser: Observable<any>;

  constructor(private ratingS: RatingService, private afs: AngularFirestore, private authS: PauthService) { }

  ngOnInit() {

    this.currentUser = this.authS.currentUserDoc.valueChanges();
    this.selectedUser = this.authS.selectedUserDoc.valueChanges();
  }

  get currentUserId() {
    return this.authS.currentUserDoc.ref.id;
  }

  get selectedUserId() {
    return this.authS.selectedUserDoc.ref.id;
  }

}
