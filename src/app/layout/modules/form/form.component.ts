import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IControl } from 'src/app/shared/interfaces/IControl';
import { ActivatedRoute } from '@angular/router';
import { EstadoCivilCatalogoService } from 'src/app/shared/services/estado-civil-catalogo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  configControls: IControl[] = [
    {
      view: true,
      bind: "nombres",
      type: "input",
      label: "Introduce tus nombres"
    },
    {
      view: true,
      bind: "apellidos",
      type: "input",
      label: "Introduce tus apellidos"
    },
    {
      view: true,
      bind: "fumas",
      type: "slide-toggle",
      label: "Indica si fumas"
    },
    {
      view: true,
      bind: "actualmentePracticasLectura",
      type: "slide-toggle",
      label: "¿Actualmente practicas lectura?"
    },
    {
      view: true,
      bind: "librosLeidosUltimosTresMeses",
      type: "checkbox",
      label: "Libros leidos ultimos tres meses"
    },
    {
      view: true,
      bind: "estadoCivil",
      type: "select",
      label: "Indica tu estado civil"
    }
  ];
  catalogoEstadoCivil = [];
  catalogoLibros = [ "Libro 1", "Libro 2", "Libro 3"];
  alert = {
    show: false,
    header: '',
    class: '',
    mensagge: ''
  }

  formControls!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public activeRoute: ActivatedRoute,
    public estadoCivilCatalogoService: EstadoCivilCatalogoService
  ) { }

  ngOnInit(): void {

    // Se tiene la inteción de usar los resolvers pero el service nunca nos respondio correctamente
    // this.activeRoute.data.subscribe((data) => {
    //   if (data['estadoCivil']) {
    //     this.catalogoEstadoCivil = data['estadoCivil'];
    //   }
    // });

    this.estadoCivilCatalogoService.obtener().subscribe({
      next: response => {
        this.catalogoEstadoCivil = response;
      },
      error: e => {
        console.error(e);
      }
    });

    let controls: { [x: string]: FormControl | FormArray; } = {};
    this.configControls.forEach(control => {
      controls[control.bind] = this.formBuilderControls(control);
    });
    this.formControls = this.formBuilder.group(controls);
    this.determinateLectura(this.formControls.value);
    this.observableControlsRules();
  }

  formBuilderControls(control: IControl): FormControl | FormArray {
    switch (control.type) {
      case 'slide-toggle':
        return this.formBuilder.control(false, this.validatorsFunction(control));
      case 'checkbox':
        let controlsCheck: FormControl[] = [];
        this.catalogoLibros.forEach(libro => {
          controlsCheck.push(this.formBuilder.control(false));
        });
        return this.formBuilder.array(controlsCheck);
      case 'select':
        return this.formBuilder.control(null, this.validatorsFunction(control))
      default:
        return this.formBuilder.control('', this.validatorsFunction(control));
    }
  }

  getFormControl(name: string, isLibros = false): FormControl | any{
    if (isLibros) {
      return this.formControls.get('librosLeidosUltimosTresMeses')?.get(name);
    }
    return this.formControls.get(name) as FormControl;
  }

  getFormArray(): FormArray {
    return this.formControls.get('librosLeidosUltimosTresMeses') as FormArray;
  }

  getLibrosForm(index: number): FormControl {
    return this.getFormArray().at(index) as FormControl;
  }

  whioutSpaces(value: string): string {
    return value.replace(/ /g, "")
  }

  observableControlsRules(): void {
    this.formControls.valueChanges.subscribe(values=> {
      this.determinateLectura(values);
      this.resetAlert();
    });
  }

  determinateLectura(values: any): void {
    if (values['actualmentePracticasLectura']) {
      this.formControls.get('librosLeidosUltimosTresMeses')?.enable({ onlySelf: true});
    } else {
      this.formControls.get('librosLeidosUltimosTresMeses')?.disable({ onlySelf: true});
    }
  }

  validatorsFunction(control: IControl): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    switch (control.bind) {
      case 'estadoCivil':
        
        break;
      case 'nombres':
      case 'apellidos':
        validators.push(Validators.required);
        validators.push(Validators.pattern(/[^\s]$/));
        break;
      default:
        validators.push(Validators.required);
        break;
    }
    return validators;
  }

  enviarValidarFormulario() {
    if (this.formControls.value.hasOwnProperty('librosLeidosUltimosTresMeses')){
      if (this.alMenosUnLibro(this.formControls.value['librosLeidosUltimosTresMeses'])) {
        this.alert.show = true;
        this.alert.header = 'Formulario invalido';
        this.alert.mensagge = 'Se reuiere seleccionar al menos un libro';
        this.alert.class = 'alert-danger';
      } else {
        this.alert.show = true;
        this.alert.header = 'Formulario Valido';
        this.alert.mensagge = '';
        this.alert.class = 'alert-success';
      }
    } else {
      this.alert.show = true;
      this.alert.header = 'Formulario Valido';
      this.alert.mensagge = '';
      this.alert.class = 'alert-success';
    }
  }

  alMenosUnLibro(values: boolean[]): boolean {
    return values.every(t => t === false);
  }

  resetAlert():void {
    this.alert.show = false;
    this.alert.header = '';
    this.alert.mensagge = '';
    this.alert.class = '';
  }

}
