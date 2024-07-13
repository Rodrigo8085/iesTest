import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
