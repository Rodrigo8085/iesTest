import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../interfaces/ILogin';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  validarData(data: ILogin): Observable<any> {
    return this.http.post(environment.api.fullUrl + environment.api.uris.login, data);
  }
}
