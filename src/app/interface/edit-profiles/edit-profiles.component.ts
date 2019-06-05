import {Component, OnInit, ViewChild} from '@angular/core';
import {PauthService} from '../../auth/pauth.service';
import {NgForm} from '@angular/forms';
import {Nanny} from '../../auth/nanny.model';
import {GetNannyDetailsService} from "../get-nanny-details.service";

@Component({
  selector: 'app-edit-profiles',
  templateUrl: './edit-profiles.component.html',
  styleUrls: ['./edit-profiles.component.scss']
})
export class EditProfilesComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm;
  @ViewChild('cf') csignupForm: NgForm;
  bio = '';
  name = '';
  nanny = {
    name: '',
    address: '',
    number: '',
    town: '',
    jobType: '',
    hourlyRate: '',
    availability: '',
    bio: ''
  };
  customer = {
    name: '',
    address: '',
    number: '',
    town: '',
    availability: '',
  };
  submitted = false;
  oncSubmit() {
    this.submitted = true;
    this.name = this.csignupForm.value.cusername;
    this.customer.name = this.name;
    this.customer.address = this.csignupForm.value.caddress;
    this.customer.number = this.csignupForm.value.cnumber;
    this.customer.availability = this.csignupForm.value.cworkingMode;
    this.customer.town = this.csignupForm.value.cworkingTown;
    this.auth.updateNannyData(this.customer);

    this.signupForm.reset();
    this.goProfile();
  }
  onSubmit() {
    this.submitted = true;
    this.name = this.signupForm.value.username;
    this.nanny.name = this.name;
    this.nanny.address = this.signupForm.value.address;
    this.nanny.number = this.signupForm.value.number;
    this.nanny.hourlyRate = this.signupForm.value.rate;
    this.nanny.jobType = this.signupForm.value.job;
    this.nanny.availability = this.signupForm.value.workingMode;
    this.nanny.town = this.signupForm.value.workingTown;
    this.nanny.bio = this.signupForm.value.bio;
    this.auth.updateNannyData(this.nanny);

    this.signupForm.reset();
    this.goProfile();
  }


  constructor(public auth: PauthService, private profileSetup: GetNannyDetailsService) { }

  ngOnInit() {
  }

  goProfile() {
    this.profileSetup.gotoProfile();
  }










  /*nanny: Nanny;
    name: any;

    selectedJob: string ;
    jobs = [ 'Kids', 'Parents', 'Pets', 'Home' ];

    selectedLocation: string;
    locations = [ 'Galle', 'Matara', 'Colombo', 'Nugegoda' ];

    selectedAvailability: string;
    availabilities = [ 'Busy', 'Free', 'Vacation Mode' ];*/


  /*nannySubmit(form: NgForm) {
    if (form.value.name != null) {
      this.nanny.name = form.value.name;
    }
    /!*if (form.value.number !== '') {
      this.nanny.number = form.value.number;
    }
    if (this.selectedJob !== '') {
      this.nanny.jobType = this.selectedJob;
    }
    if (this.selectedLocation !== '') {
      this.nanny.town = this.selectedLocation;
    }
    if (form.value.hourlyRate !== '') {
      this.nanny.hourlyRate = form.value.hourlyRate;
    }
    if (form.value.availability !== '') {
      this.nanny.availability = form.value.availability;
    }
    if (form.value.address !== '') {
      this.nanny.address = form.value.address;
    }
    if (form.value.bio !== '') {
      this.nanny.bio = form.value.bio;
    }*!/
    console.log(this.nanny.name);
    // this.auth.updateNannyData(this.nanny);
  }

  customerSubmit(form: NgForm) {
    if (form.value.name != null) {
      this.nanny.name = form.value.name;
    } else if (form.value.number != null) {
      this.nanny.number = form.value.number;
    } else if (this.selectedLocation !== '') {
      this.nanny.town = this.selectedLocation;
    } else if (form.value.address !== '') {
      this.nanny.address = form.value.address;
    } else if (form.value.bio !== '') {
      this.nanny.bio = form.value.bio;
    }
    this.auth.updateCustomerData(this.nanny);
  }*/

}
