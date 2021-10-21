import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { LicencesService } from '../services/licences.service';
import { Country } from '../models/country.model';
import { Observable } from 'rxjs';
import { map, switchMap, catchError, filter } from 'rxjs/operators';
import { LicenceDialogComponent } from '../licence-dialog/licence-dialog.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-licence-list',
  templateUrl: './licence-list.component.html',
  styleUrls: ['./licence-list.component.scss']
})
export class LicenceListComponent implements OnInit {
  countryName: string;
  fileNameDialogRef: MatDialogRef<LicenceDialogComponent>;
  displayedColumns: string[] = ['name', 'hasLicence', 'edit'];
  countriesSource$: Observable<Country[]>;

  constructor(private licenceService: LicencesService, private dialog: MatDialog) {}

  ngOnInit() {
    this.countriesSource$ = this.licenceService.getCountries().pipe(map(c => c.countries));
  }

  openDialog(element: object): void {
    const dialogRef = this.dialog.open(LicenceDialogComponent, {
      width: '250px',
      data: {
        name: element['name'],
        hasLicence: element['hasLicence']
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.countriesSource$ = this.licenceService.getCountries().pipe(map(c => c.countries));
    });
  }
}
