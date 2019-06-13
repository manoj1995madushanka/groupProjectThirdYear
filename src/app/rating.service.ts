import { Injectable } from '@angular/core';
import {PauthService} from "./auth/pauth.service";
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {Rating} from "./rating/rating.model";

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private authS: PauthService, private afs: AngularFirestore) { }

  // Star reviews that belong to a current user
  getUserStars(currentUserId) {
    const starsRef = this.afs.collection('rating', ref => ref.where('currentUserId', '==', currentUserId) );
    return starsRef.valueChanges();
  }

  // Get all stars that belog to a selected user  getMovieStars
  getSelectedUserReviews(selectedUserId) {
    const starsRef = this.afs.collection('rating', ref => ref.where('selectedUserId', '==', selectedUserId) );
    return starsRef.valueChanges();
  }

  // Create or update review
  setReview(currentUserId, selectedUserId, currentUserName, selectedUserName, value) {
    // Star document data
    const rate: Rating = { currentUserId, selectedUserId, currentUserName, selectedUserName, value };

    // Custom doc ID for relationship
    const ratePath = `rating/${rate.currentUserId}_${rate.selectedUserId}`;

    // Set the data, return the promise
    return this.afs.doc(ratePath).set(rate);
  }

}
