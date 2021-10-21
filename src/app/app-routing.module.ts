import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    //{ path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule' },
    { path: 'profile', loadChildren: () => import('app/profile/profile.module').then(m => m.ProfileModule) },
    //{ path: 'licences', loadChildren: 'app/licences/licences.module#LicencesModule' },
    { path: 'licences', loadChildren: () => import('app/licences/licences.module').then(m => m.LicencesModule) },
    //{ path: 'financial-institutions', loadChildren: 'app/financial-institutions/financial-institutions.module#FinancialInstitutionsModule'}
    {
      path: 'financial-institutions',
      loadChildren: () =>
        import('app/financial-institutions/financial-institutions.module').then(m => m.FinancialInstitutionsModule)
    }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
