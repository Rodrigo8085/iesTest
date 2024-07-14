import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNombreComponent } from './dialog-nombre/dialog-nombre.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  nombreIngresado = '';

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  escribirNombre() {
    this.dialog
    .open(DialogNombreComponent, {
      width: '503px',
      height: 'auto',
      maxWidth: 'auto',
      disableClose: true,
      autoFocus: false,
      data: { nombre: this.nombreIngresado},
    })
    .afterClosed()
    .subscribe(
      (result) => {
        if (typeof result === 'string') {
          this.nombreIngresado = result;
        }
      },
    );
  }

}
