import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstadoCivilCatalogoService } from './estado-civil-catalogo.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoCivilCatalogoResolverService {

  constructor(
    private estadoCivilCatalogoService: EstadoCivilCatalogoService
  ) { }

  resolve(): Observable<any> {
    return this.estadoCivilCatalogoService.obtener();
}
}
