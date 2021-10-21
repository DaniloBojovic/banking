import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenceListComponent } from './licence-list/licence-list.component';
import { extract } from '@app/core';

const routes: Routes = [{ path: '', component: LicenceListComponent, data: { title: extract('TPP Profile') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicencesRoutingModule {}
