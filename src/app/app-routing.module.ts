import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckLogged } from './shared/guards/checkLogged.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'prefix' },
      {
          path: 'login',
          canActivate: [CheckLogged],
          loadChildren: () => import('./layout/login/login.module').then((m) => m.LoginModule)
      },
      {
        path: 'modules',
        canActivate: [CheckLogged],
        loadChildren: () => import('./layout/modules/modules.module').then((m) => m.ModulesModule)
    },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
