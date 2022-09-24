import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  constructor(private fb: FormBuilder) {}

  formulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [['Super Mario'], ['Sonic'], ['King Kong']],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get arrayFavoritos() {
    return this.formulario.get('favoritos') as FormArray;
  }

  //funcion para validar el campo nombre
  validarCampo(campo: string) {
    return (
      this.formulario.controls[campo].errors &&
      this.formulario.controls[campo].touched
    );
  }

  //función para guardar el formulario
  guardar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log(this.formulario.value);
    this.formulario.reset();
  }

  //método para agregar un nuevo juevo favorito
  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    // this.arrayFavoritos.push(
    //   new FormControl(this.nuevoFavorito.value, Validators.required)
    // );

    this.arrayFavoritos.push(
      this.fb.control(this.nuevoFavorito.value, Validators.required)
    );
    this.nuevoFavorito.reset();
  }

  //metodo para borrar un juego de la lista
  borrarFavorito(indice: number) {
    this.arrayFavoritos.removeAt(indice);
    console.log(this.formulario.value);
  }
}
