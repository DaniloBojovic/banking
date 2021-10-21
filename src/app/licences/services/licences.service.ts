import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CountryList, Country } from '../models/country.model';
import { LicenceListComponent } from '../licence-list/licence-list.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class LicencesService {
  private countriesUrl = '/countries';

  constructor(private httpClient: HttpClient, private licenceService: LicencesService, private dialog: MatDialog) {}

  //old method
  getCountries(): Observable<CountryList> {
    return this.httpClient.get(this.countriesUrl).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load countries :-('))
    );
  }

  getCountriesFromMemoryDb(): Observable<Country[]> {
    debugger;
    return this.httpClient.get<Country[]>(this.countriesUrl).pipe(
      tap(_ => 'fetched countries'),
      catchError(this.handleError<Country[]>('get countries', []))
    );
  }

  updateCountry(data: { code: string; hasLicence: boolean }): Observable<any> {
    const url = `${this.countriesUrl}/${data.code}`;

    return this.httpClient.put(url, data).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not set country licence :-('))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
