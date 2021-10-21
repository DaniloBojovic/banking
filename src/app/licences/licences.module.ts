import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicencesRoutingModule } from './licences-routing.module';
import { LicenceListComponent } from './licence-list/licence-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { LicenceDialogComponent } from './licence-dialog/licence-dialog.component';

@NgModule({
  declarations: [LicenceListComponent, LicenceDialogComponent],
  imports: [CommonModule, LicencesRoutingModule, TranslateModule, FlexLayoutModule, MaterialModule, MatDialogModule],
  entryComponents: [LicenceDialogComponent]
})
export class LicencesModule {}
