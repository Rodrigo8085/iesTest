import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CambioLetrasPipe } from './cambioLetras.pipe';



@NgModule({
  declarations: [CambioLetrasPipe],
  exports: [CambioLetrasPipe],
  providers: [CambioLetrasPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
