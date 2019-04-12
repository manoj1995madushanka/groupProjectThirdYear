import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    MatSidenavModule,MatCardModule,MatIconModule,MatTabsModule,MatFormFieldModule,MatBadgeModule,FlexLayoutModule,MatButtonModule,
    MatDialogModule
  ],
  exports: [
    MatSidenavModule,MatCardModule,MatIconModule,MatTabsModule,MatFormFieldModule,MatBadgeModule,FlexLayoutModule,MatButtonModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
