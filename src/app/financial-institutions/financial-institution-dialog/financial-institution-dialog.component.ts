import { FinancialInstitution } from '@app/financia-institution';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../financial-institution-list/financial-institution-list.component';
import { FinancialInstitutionsService } from '../services/financial-institutions.service';

@Component({
  selector: 'app-financial-institution-dialog',
  templateUrl: './financial-institution-dialog.component.html',
  styleUrls: ['./financial-institution-dialog.component.scss']
})
export class FinancialInstitutionDialogComponent implements OnInit {
  constructor(
    private financialInstitutionService: FinancialInstitutionsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FinancialInstitutionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  submit(form: any) {
    //this.dialogRef.close(`${form.value}`);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(financialInstitution: FinancialInstitution): void {
    debugger;
    if (!financialInstitution['isRegistered']) {
      financialInstitution.isRegistered = !financialInstitution.isRegistered;
      this.financialInstitutionService.updateFinancialInstitution(financialInstitution).subscribe(
        data => this.dialogRef.close(data),
        err => console.error('Failed: ' + err)
      );
    } else {
      financialInstitution.isRegistered = !financialInstitution.isRegistered;
      this.financialInstitutionService.unregisterFinancialInstitution(financialInstitution).subscribe(
        data => this.dialogRef.close(data),
        err => console.error('Failed: ' + err)
      );
    }
  }
}
