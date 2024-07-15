import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/shared/interfaces/IUsuario';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  datoUsuario!: IUsuario;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    const data = localStorage.getItem('dataLogin');
    this.datoUsuario = data ? JSON.parse(data) : {};
  }
  usuarioSalir() {
    this.router.navigate(['/login'])
    localStorage.clear();
  }

}
