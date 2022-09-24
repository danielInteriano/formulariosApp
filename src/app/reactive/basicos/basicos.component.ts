import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario.reset({
      nombre: 'PC Escritorio',
      precio: 15000,
      existencias: 10,
    });
  }

  //Esta es una forma de crear un formulario del lado de typescript
  /*formulario: FormGroup = new FormGroup({
    nombre: new FormControl('Daniel'),
    precio:new FormControl(1000),
    existencias:new FormControl(10)
  });*/

  formulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(1)]],
  });

  //Funcion para validar un campo
  validarCampo(campo: string) {
    return (
      this.formulario.controls[campo].errors &&
      this.formulario.controls[campo].touched
    );
  }

  //método para guardar los valores del formulario
  guardar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log(this.formulario.value);
    this.formulario.reset();
  }
}
