import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nannySystem';

  openSidenav = 'false';

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    // this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  onToggle(){

  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
