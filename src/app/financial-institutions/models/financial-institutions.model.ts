export interface FinancialInstitution {
  id: string;
  name: string;
  bic: string;
  isRegistered: boolean;
}
export interface FinancialInstitutionList {
  financialInstitutions: FinancialInstitution[];
}
