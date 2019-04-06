import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import {InterfaceComponent} from './interface/interface.component';
import {BotComponent} from './bot/bot.component';
import {FindServiceComponent} from './findService/findService.component';
import {ChildComponent} from './findService/child/child.component';
import {HouseKeeperComponent} from './findService/house-keeper/house-keeper.component';
import {ForumComponent} from './forum/forum.component';
import {GiveServiceComponent} from './give-service/give-service.component';
import {ContactUsComponent} from './interface/contact-us/contact-us.component';
import {PrivacyPolicyComponent} from './interface/privacy-policy/privacy-policy.component';
import {AuthGuard} from './auth/auth.guard';
import {SelectUserTypeComponent} from './interface/select-user-type/select-user-type.component';
import {NannyComponent} from './interface/select-user-type/nanny/nanny.component';
import {NannySignupComponent} from './auth/nanny/nanny-signup/nanny-signup.component';

const routes: Routes = [
  {path: '', component: InterfaceComponent},
  {path: 'bot', component: BotComponent},
  {path: 'find-service', component: FindServiceComponent, canActivate: [AuthGuard]},
  {path: 'for-child', component: ChildComponent, canActivate: [AuthGuard]},
  {path: 'for-house-keeping', component: HouseKeeperComponent, canActivate: [AuthGuard]},
  {path: 'forum', component: ForumComponent, canActivate: [AuthGuard]},
  {path: 'give-service', component: GiveServiceComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'select-user', component: SelectUserTypeComponent},
  {path: 'nanny', component: NannyComponent},
  {path: 'nsignup', component: NannySignupComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
