import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import {InterfaceComponent} from './interface/interface.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {BotComponent} from './bot/bot.component';
import {FindServiceComponent} from './findService/findService.component';
import {ChildComponent} from './findService/child/child.component';
import {HouseKeeperComponent} from './findService/house-keeper/house-keeper.component';
import {ForumComponent} from './forum/forum.component';
import {GiveServiceComponent} from './give-service/give-service.component';
import {ContactUsComponent} from './interface/contact-us/contact-us.component';
import {PrivacyPolicyComponent} from './interface/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {path: '', component: InterfaceComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'bot', component: BotComponent},
  {path: 'find-service', component: FindServiceComponent},
  {path: 'for-child', component: ChildComponent},
  {path: 'for-house-keeping', component: HouseKeeperComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'give-service', component: GiveServiceComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
