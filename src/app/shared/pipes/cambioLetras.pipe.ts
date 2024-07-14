import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: string): string {
    let resultado = value.replace(/[a]/g, '4');
    resultado = resultado.replace(/[e]/g, '3');
    resultado = resultado.replace(/[i]/g, '1');
    resultado = resultado.replace(/[o]/g, '0');
    resultado = resultado.replace(/[u]/g, '9');
    return resultado;
  }

}
