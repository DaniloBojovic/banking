import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const countries = [
      { id: 'AFG', name: 'Afghanistan', hasLicence: false },
      { id: 'AUT', name: 'Austria', hasLicence: false },
      { id: 'SWE', name: 'Sweden', hasLicence: true },
      { id: 'NOR', name: 'Norway', hasLicence: true },
      { id: 'DNK', name: 'Denmark', hasLicence: true },
      { id: 'FIN', name: 'Finland', hasLicence: true }
    ];
    const financialInstitutions = [
      { id: 'NDEASESSXXX', name: 'Nordea', countryCode: 'SWE', isRegistered: true },
      { id: 'SWEDSESSXXX', name: 'Swedbank', countryCode: 'SWE', isRegistered: false },
      { id: 'NDEANOKK', name: 'Nordea', countryCode: 'NOR', isRegistered: true },
      { id: 'FIFBFOTXXXX', name: 'BANKNORDIK', countryCode: 'DNK', isRegistered: false },
      { id: 'DABADKKKXXX', name: 'DANSKE BANK', countryCode: 'DNK', isRegistered: true },
      { id: 'DKNBDKKKXXX', name: 'DANMARKS NATIONALBANK', countryCode: 'DNK', isRegistered: true }
    ];
    return { countries, financialInstitutions };
  }
}
