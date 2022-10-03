import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.patronNombre),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPatron),
        ],
        [this.emailValidator],
      ],
      usuario: [
        '',
        [Validators.required, this.validatorService.obtenerUsuario],
      ],
      password1: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.compararPassword('password1', 'password2'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.formulario.reset({
      nombre: '',
      email: '',
      usuario: '',
      password1: '',
      password2: '',
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
    this.formulario.reset();
  }

  //función para validar la password2
  validarPassword2(password1: FormControl) {}
}
