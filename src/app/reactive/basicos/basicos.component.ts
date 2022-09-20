import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  constructor(private fb: FormBuilder) {}

  //Esta es una forma de crear un formulario del lado de typescript
  /*formulario: FormGroup = new FormGroup({
    nombre: new FormControl('Daniel'),
    precio:new FormControl(1000),
    existencias:new FormControl(10)
  });*/

  formulario: FormGroup = this.fb.group({
    nombre: ['Daniel', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(1)]],
  });

  //Funcion para validar un campo
  validarCampo(campo: string) {
    return (
      this.formulario.controls[campo].errors &&
      this.formulario.controls[campo].touched
    );
  }
}
