import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileUrl = '/profile/';

  constructor(private httpClient: HttpClient) {}

  getProfile(): Observable<Profile> {
    debugger;
    return this.httpClient.get(this.profileUrl).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load profile :-('))
    );
  }

  updateProfile(profile: Profile) {
    return this.httpClient.post(this.profileUrl, profile);
  }
}
