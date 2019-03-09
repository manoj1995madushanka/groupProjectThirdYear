import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BotComponent } from './bot/bot.component';
import { InterfaceComponent } from './interface/interface.component';
import { NavbarComponent } from './interface/navbar/navbar.component';
import { HeaderComponent } from './interface/header/header.component';
import { HomeComponent } from './interface/home/home.component';
import { NotFoundComponent } from './interface/not-found/not-found.component';
import { ChildComponent } from './findService/child/child.component';
import { HouseKeeperComponent } from './findService/house-keeper/house-keeper.component';
import { GiveServiceComponent } from './give-service/give-service.component';
import { ForumComponent } from './forum/forum.component';
import { ContactUsComponent } from './interface/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './interface/privacy-policy/privacy-policy.component';
import {FindServiceComponent} from './findService/findService.component';
import {AppRoutingModule} from './app-routing.module';
import {ChatModule} from "./bot/chat.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    BotComponent,
    InterfaceComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ChildComponent,
    HouseKeeperComponent,
    GiveServiceComponent,
    ForumComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    FindServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
