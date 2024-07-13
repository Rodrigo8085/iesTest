import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { CalculateDateComponent } from './calculate-date/calculate-date.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    ConversionsComponent,
    CalculateDateComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
