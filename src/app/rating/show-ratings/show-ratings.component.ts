import { Component, OnInit, Input } from '@angular/core';
import {RatingService} from "../../rating.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-show-ratings',
  templateUrl: './show-ratings.component.html',
  styleUrls: ['./show-ratings.component.scss']
})
export class ShowRatingsComponent implements OnInit {

  @Input() currentUserId;
  @Input() selectedUserId;

  ratings: Observable<any>; // stars
  avgRating: Observable<any>;

  constructor(public rateingS : RatingService) { }

  ngOnInit() {
    this.ratings = this.rateingS.getSelectedUserReviews(this.selectedUserId);

    this.avgRating = this.ratings.map(arr => {
      const ratingss = arr.map(v => v.value)
      return ratingss.length ? ratingss.reduce((total, val) => total + val) / arr.length : 'not reviewed';
    });
  }

  // startHandler
  reviewHandler(value) {
    this.rateingS.setReview(this.currentUserId, this.selectedUserId, value);
  }

}
