import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../licence-list/licence-list.component';
import { LicencesService } from '../services/licences.service';

@Component({
  selector: 'app-licence-list',
  templateUrl: './licence-dialog.component.html',
  styleUrls: ['./licence-dialog-component.scss']
})
export class LicenceDialogComponent {
  form: FormGroup;

  constructor(
    private licencesService: LicencesService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LicenceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      filename: ''
    });
  }

  // submit(form: any) {
  //   this.dialogRef.close(`${form.value.filename}`);
  // }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(data: object): void {
    //console.log(data['hasLicence'] ? `Licence removed for ${data['name']}` : `Licence added for ${data['name']}`);
    const countryCode = this.getCountryCode(data['name']);
    this.licencesService.updateCountry({ code: countryCode, hasLicence: data['hasLicence'] }).subscribe(
      data => this.dialogRef.close(data),
      err => console.error('Failed: ' + err)
    );
  }

  getCountryCode(country: string) {
    let countryCode = 'DK';

    switch (country) {
      case 'Sweden': {
        countryCode = 'FI';
        break;
      }
      case 'Finland': {
        countryCode = 'FI';
        break;
      }
      case 'Denmark': {
        countryCode = 'DK';
        break;
      }
      case 'Norway': {
        countryCode = 'NO';
        break;
      }
      default: {
        console.log('Country does not exists.');
        break;
      }
    }
    return countryCode;
  }
}
