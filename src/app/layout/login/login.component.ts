import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';
import { IResponseLogin } from 'src/app/shared/interfaces/IResponseLogin';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  complete = {
    user: false,
    pass: false
  }

  alert = {
    show: false,
    class: '',
    mensagge: ''
  }

  errorRequest!: IResponseLogin;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.construirForm();
  }

  construirForm() {
    const grupForm = {
      username: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required)
    }
    this.loginForm = this.formBuilder.group(grupForm);
    this.loginForm.valueChanges.subscribe(()=> {
      if (this.loginForm.get('password')?.dirty) {

      }
    })
  }

  getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }

  validarDatos() {
    this.loginForm.get('password')?.markAsPristine();
    this.loginService.validarData(this.loginForm.value)
    .subscribe({
      next: (response: IResponseLogin) => {
        localStorage.setItem('dataLogin', response.resultado);
      },
      error: (error: HttpErrorResponse ) => {
        if (error.error.hasOwnProperty("resultado")) {
          this.errorRequest = error.error;
          this.alert.show = true;
          this.alert.mensagge = this.errorRequest?.header?.descripcionRespuesta;
          this.alert.class= 'alert-warning';
        } else {
          this.alert.show = true;
          this.alert.mensagge = 'Error al procesar la solicitud reintentalo';
          this.alert.class= '';
        }

      }
    });
  }

  resetAlert() {
    this.alert.show = false;
    this.alert.mensagge = '';
    this.alert.class = '';
  }

  resetComplete() {
    this.loginForm.reset();
    this.complete.user = false;
    this.complete.pass = false;
  }

}
