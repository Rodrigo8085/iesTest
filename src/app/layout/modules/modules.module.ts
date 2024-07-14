import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { CalculateDateComponent } from './calculate-date/calculate-date.component';
import { FormComponent } from './form/form.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ModulesComponent } from './modules.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogNombreComponent } from './welcome/dialog-nombre/dialog-nombre.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WelcomeComponent,
    ConversionsComponent,
    CalculateDateComponent,
    FormComponent,
    ModulesComponent,
    DialogNombreComponent
  ],
  exports: [ DialogNombreComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    PipesModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }
