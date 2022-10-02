import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  emailPatron,
  obtenerUsuario,
  patronNombre,
} from 'src/app/Validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  //función paravalidar password2 con password1

  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(patronNombre)]],
    email: ['', [Validators.required, Validators.pattern(emailPatron)]],
    usuario: ['', [Validators.required, obtenerUsuario]],
    password1: ['', [Validators.required]],
    password2: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario.reset({
      nombre: 'Pedro Rodriguez',
      email: 'correo@correo.com',
      usuario: '',
      password1: 'password',
      password2: 'password',
    });
  }

  //Funcion para validad cada campo
  validarCampo(campo: string) {
    return (
      this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched
    );
  }

  //función para validar el formulario
  validarFormulario() {
    console.log(this.formulario.value);
    this.formulario.markAllAsTouched();
  }
}
