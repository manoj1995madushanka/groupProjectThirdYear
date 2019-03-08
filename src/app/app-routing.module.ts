import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {InterfaceComponent} from './interface/interface.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {BotComponent} from './bot/bot.component';

const routes: Routes = [
  {path: '', component: InterfaceComponent},
  {path:'signup', component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'bot',component:BotComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: []
})
export class AppRoutingModule { }
