import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculateDateComponent } from './calculate-date/calculate-date.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { FormComponent } from './form/form.component';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'prefix' },
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'calculate-date',
        component: CalculateDateComponent
      },
      {
        path: 'conversions',
        component: ConversionsComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
