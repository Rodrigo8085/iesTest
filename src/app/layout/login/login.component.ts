import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IResponseLogin } from 'src/app/shared/interfaces/IResponseLogin';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  typeContra = 'password';
  countActiveGlobal = 0;
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
  activerSuper = false;

  errorRequest!: IResponseLogin;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.construirForm();
  }

  construirForm() {
    const grupForm = {
      username: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required)
    }
    this.loginForm = this.formBuilder.group(grupForm);
  }

  getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }

  validarDatos() {
    this.loginForm.get('password')?.markAsPristine();
    this.loginService.validarData(this.loginForm.value)
    .subscribe({
      next: (response: IResponseLogin) => {
        this.countActiveGlobal ++;
        if (response.exito === true) {
          localStorage.setItem('dataLogin', JSON.stringify(response));
          this.router.navigate(['/modules'])
        } else {
          this.alert.show = true;
          this.alert.mensagge = response?.mensaje ? response?.mensaje : '';
          this.alert.class= 'alert-danger';
          if (this.countActiveGlobal > 1) {
            this.activerSuper = true;
          }
        }
      },
      error: (error: HttpErrorResponse ) => {
        if (error.error.hasOwnProperty("mensaje")) {
          this.errorRequest = error.error;
          this.alert.show = true;
          this.alert.mensagge = this.errorRequest?.mensaje ? this.errorRequest?.mensaje : '';
          this.alert.class= 'alert-danger';
        } else if (error.error.hasOwnProperty("resultado")) {
          this.errorRequest = error.error;
          this.alert.show = true;
          this.alert.mensagge = this.errorRequest?.header?.descripcionRespuesta ? this.errorRequest?.header?.descripcionRespuesta: '';
          this.alert.class= 'alert-warning';
        } else {
          this.alert.show = true;
          this.alert.mensagge = 'Error al procesar la solicitud reintentalo';
          this.alert.class= '';
        }

      }
    });
  }

  loginSuperAdmin() {
    localStorage.setItem('dataLogin', JSON.stringify({
      adminUserName: 'Rodrigo Santiago'
    }));
    this.router.navigate(['/modules'])
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
