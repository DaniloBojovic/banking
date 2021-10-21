import { Component, OnInit } from '@angular/core';
//import { FinancialInstitution } from '../models/financial-institutions.model';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { FinancialInstitutionsService } from '../services/financial-institutions.service';
import { map } from 'rxjs/operators';
// tslint:disable-next-line: max-line-length
import { FinancialInstitutionDialogComponent } from '../financial-institution-dialog/financial-institution-dialog.component';
import { LicencesService } from '@app/licences/services/licences.service';
import { Country } from '@app/licences/models/country.model';
import { FinancialInstitution } from '@app/financia-institution';

export interface DialogData {
  name: string;
  clientId: string;
}

@Component({
  selector: 'app-financial-institution-list',
  templateUrl: './financial-institution-list.component.html',
  styleUrls: ['./financial-institution-list.component.scss']
})
export class FinancialInstitutionListComponent implements OnInit {
  clientId: string;
  clientSecret: string;
  displayedColumns: string[] = ['id', 'name', 'isRegistered', 'edit'];
  //financialInstitutionsSource$: Observable<FinancialInstitution[]>;
  countries: Country[] = [];
  financialInstitutions: FinancialInstitution[] = [];
  constructor(
    private financialInstitutionService: FinancialInstitutionsService,
    private licenceService: LicencesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.licenceService.getCountriesFromMemoryDb().subscribe(countries => (this.countries = countries));
  }

  setUrl(code: string) {
    //old
    // this.financialInstitutionsSource$ = this.financialInstitutionService
    //   .getFinancialInstitutions(code)
    //   .pipe(map(f => f.financialInstitutions));

    debugger;
    this.financialInstitutionService
      .getFinancialInstitutions(code)
      .subscribe(financialInstitutions => (this.financialInstitutions = financialInstitutions));
  }

  openDialog(element: any): void {
    const code = element.countryCode;
    debugger;
    const dialogRef = this.dialog.open(FinancialInstitutionDialogComponent, {
      width: '350px',
      data: {
        id: element['id'],
        name: element['name'],
        isRegistered: element['isRegistered'],
        countryCode: element['countryCode'],
        clientId: this.clientId,
        clientSecret: this.clientSecret
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      this.setUrl(code);
    });
  }
}
