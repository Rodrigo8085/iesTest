import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  }

  getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }

  validarDatos() {
    this.loginService.validarData(this.loginForm.value).subscribe({
      next: response => {
        console.info(response)
      }
    })
  }

}
