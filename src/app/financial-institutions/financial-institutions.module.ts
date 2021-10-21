import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialInstitutionsRoutingModule } from './financial-institutions-routing.module';
import { FinancialInstitutionListComponent } from './financial-institution-list/financial-institution-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
// tslint:disable-next-line: max-line-length
import { FinancialInstitutionDialogComponent } from './financial-institution-dialog/financial-institution-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FinancialInstitutionListComponent, FinancialInstitutionDialogComponent],
  imports: [
    CommonModule,
    FinancialInstitutionsRoutingModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [FinancialInstitutionDialogComponent]
})
export class FinancialInstitutionsModule {}
