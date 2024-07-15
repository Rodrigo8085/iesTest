import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculate-date',
  templateUrl: './calculate-date.component.html',
  styleUrls: ['./calculate-date.component.scss']
})
export class CalculateDateComponent implements OnInit {

  formCalculate!: FormGroup;
  selectedDate!: Date;
  calculatedDate!: Date;
  opcionesUnidad = [
    'Dia',
    'Mes',
    'Año'
  ]

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const forms = {
      unidad: this.formBuilder.control(null,Validators.required),
      cantidad: this.formBuilder.control(0, Validators.required)
    }
    this.formCalculate = this.formBuilder.group(forms);
    this.observableCalculate();
  }

  observableCalculate(): void {
    this.formCalculate.valueChanges.subscribe((values: {
      unidad: string | null,
      cantidad: number
    }) => {
      if (values.cantidad > 0) {
        switch (values.unidad) {
          case 'Dia':
            this.calculatedDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate?.getDate() + values.cantidad)
            break;
          case 'Mes':
            this.calculatedDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + values.cantidad, this.selectedDate?.getDate())
            break;
          case 'Año':
            this.calculatedDate = new Date(this.selectedDate.getFullYear() + values.cantidad, this.selectedDate.getMonth(), this.selectedDate?.getDate())
            break;
        }
      }
    });
  }

  getControl(name: string): FormControl {
    return this.formCalculate.get(name) as FormControl;
  }

}
