import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { FinancialInstitutionListComponent } from './financial-institution-list/financial-institution-list.component';

const routes: Routes = [
  { path: '', component: FinancialInstitutionListComponent, data: { title: extract('TPP Profile') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialInstitutionsRoutingModule {}
