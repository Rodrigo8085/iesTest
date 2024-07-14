import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-nombre',
  templateUrl: './dialog-nombre.component.html',
  styleUrls: ['./dialog-nombre.component.scss']
})
export class DialogNombreComponent implements OnInit {
  controlName!: FormControl;

  constructor(
    public dialogRef: MatDialogRef<DialogNombreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nombre: string },
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.controlName = this.formBuilder.control(this.data.nombre, [Validators.required, Validators.minLength(5)])
  }

}
