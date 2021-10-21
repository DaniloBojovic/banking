import { Observable, of } from 'rxjs';
import { FinancialInstitutionList } from '../models/financial-institutions.model';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FinancialInstitution } from '@app/financia-institution';

@Injectable({
  providedIn: 'root'
})
export class FinancialInstitutionsService {
  private financialInstitutionsUrl = '/financialInstitutions';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {}

  //old method
  // getFinancialInstitutions(code: string): Observable<FinancialInstitutionList> {
  //   this.financialInstitutionsUrl = `/${code}/financialInstitutions`;
  //   return this.httpClient.get(this.financialInstitutionsUrl).pipe(
  //     map((body: any) => body),
  //     catchError(() => of('Error, could not load FI :-('))
  //   );
  // }

  getFinancialInstitutions(code: string): Observable<FinancialInstitution[]> {
    return this.httpClient.get<FinancialInstitution[]>(this.financialInstitutionsUrl).pipe(
      map(financialInstitutions => financialInstitutions.filter(fi => fi.countryCode == code)),
      catchError(this.handleError<FinancialInstitution[]>('get financialInstitutions', []))
    );
  }

  // registerFinancialInstitution(data: { fi: string; clientId: string; clientSecret: string }): Observable<any> {
  //   const url = `${this.financialInstitutionsUrl}/${data.fiId}`;
  //   return this.httpClient
  //     .post(url, data, {
  //       headers: {
  //         'Client-ID': data.clientId,
  //         'Client-Secret': data.clientSecret
  //       }
  //     })
  //     .pipe(
  //       map((body: any) => body),
  //       catchError(() => of('Error, could not set FI registration :-('))
  //     );
  // }

  updateFinancialInstitution(financialInstitution: FinancialInstitution): Observable<any> {
    const url = `${this.financialInstitutionsUrl}/${financialInstitution.id}`;
    return this.httpClient.post(url, financialInstitution, this.httpOptions).pipe(
      //tap(_ => console.log(`updated financialInstitution id=${data.financialInstitution.id}`)),
      map((financialInstitution: FinancialInstitution) => financialInstitution),
      catchError(this.handleError<any>('updateFinancialInstitution'))
    );
  }

  unregisterFinancialInstitution(financialInstitution: FinancialInstitution): Observable<any> {
    debugger;
    const url = `${this.financialInstitutionsUrl}/${financialInstitution.id}`;
    return this.httpClient.post(url, financialInstitution, this.httpOptions).pipe(
      map((financialInstitution: FinancialInstitution) => financialInstitution),
      catchError(this.handleError<any>('updateFinancialInstitution'))
    );
  }

  // unregisterFinancialInstitution(data: { fiId: string; isRegistered: boolean }): Observable<any> {
  //   const url = `${this.financialInstitutionsUrl}/${data.fiId}`;
  //   const isRegistered = data.isRegistered ? 'true' : 'false';
  //   return this.httpClient
  //     .post(url, data, {
  //       headers: {
  //         IsRegistered: isRegistered
  //       }
  //     })
  //     .pipe(
  //       map((body: any) => body),
  //       catchError(() => of('Error, could not set FI registration :-('))
  //     );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
