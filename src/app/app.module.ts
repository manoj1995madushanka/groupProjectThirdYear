import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotComponent } from './bot/bot.component';
import { InterfaceComponent } from './interface/interface.component';
import { HeaderComponent } from './interface/header/header.component';
import { HomeComponent } from './interface/home/home.component';
import { NotFoundComponent } from './interface/not-found/not-found.component';
import { ChildComponent } from './findService/child/child.component';
import { HouseKeeperComponent } from './findService/house-keeper/house-keeper.component';
import { GiveServiceComponent } from './give-service/give-service.component';
import { ForumComponent } from './forum/forum.component';
import { ContactUsComponent } from './interface/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './interface/privacy-policy/privacy-policy.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { PersonalDetailsComponent } from './give-service/personal-details/personal-details.component';
import { ExperiencesComponent } from './give-service/experiences/experiences.component';
import { FeedbacksComponent } from './give-service/feedbacks/feedbacks.component';
import {FindServiceComponent} from './findService/findService.component';
import {AppRoutingModule} from './app-routing.module';
import {ChatModule} from './bot/chat.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SidenavListComponent} from './interface/sidenav-list/sidenav-list.component';
import {environment} from '../environments/environment';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { SelectUserTypeComponent } from './interface/select-user-type/select-user-type.component';
import { NannyComponent } from './interface/select-user-type/nanny/nanny.component';
import { NannySignupComponent } from './auth/nanny/nanny-signup/nanny-signup.component';
import { NannyLoginComponent } from './auth/nanny/nanny-login/nanny-login.component';
import { CsignupComponent } from './auth/customer/csignup/csignup.component';
import { CloginComponent } from './auth/customer/clogin/clogin.component'
import {PauthService} from "./auth/pauth.service";
import { LoginAsComponent } from './interface/select-user-type/login-as/login-as.component';
import { SignupAsComponent } from './interface/select-user-type/signup-as/signup-as.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    BotComponent,
    InterfaceComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ChildComponent,
    HouseKeeperComponent,
    GiveServiceComponent,
    ForumComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    PersonalDetailsComponent,
    ExperiencesComponent,
    FeedbacksComponent,
    FindServiceComponent,
    SidenavListComponent,
    SelectUserTypeComponent,
    NannyComponent,
    NannySignupComponent,
    NannyLoginComponent,
    CsignupComponent,
    CloginComponent,
    LoginAsComponent,
    SignupAsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    AppRoutingModule,
    ChatModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],

  providers: [PauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
