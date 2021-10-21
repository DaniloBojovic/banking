export interface Country {
  id: string;
  name: string;
  email: string;
  hasLicence: boolean;
}
export interface CountryList {
  countries: Country[];
}
