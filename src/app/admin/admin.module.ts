import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CaretakersComponent } from './caretakers/caretakers.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [CaretakersComponent, SidenavComponent, MaterialDashboardComponent, AdminDashboardComponent],
  imports: [CommonModule, MaterialModule, RouterModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule],
  exports: [CommonModule, MaterialModule]
})
export class AdminModule { }
