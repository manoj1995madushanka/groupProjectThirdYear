import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
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
import {FormsModule} from '@angular/forms';
import {SidenavListComponent} from './interface/sidenav-list/sidenav-list.component';
import {AuthService} from "./auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
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
    SidenavListComponent
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
    FormsModule
  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
