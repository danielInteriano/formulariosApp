import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  //propiedades para validar usando expresiones regulares
  public patronNombre: string = '([A-Za-z]+) ([A-Za-z]+)';
  public emailPatron: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  //función para obtener el campo del usuario y validarlo contra el backend
  obtenerUsuario(control: FormControl): ValidationErrors | null {
    const usuario: string = control.value;
    if (usuario === 'daniel123') {
      return { usuario: 'no válido' };
    }
    return null;
  }

  //función paravalidar que las password sean iguales
  passwordIguales(password1: string, password2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(password1)?.value;
      const pass2 = formGroup.get(password2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(password2)?.setErrors({ noIguales: true });
        return { noIguales: true };
      }
      formGroup.get(password2)?.setErrors(null);
      return null;
    };
  }

  //función para comparar si las password son iguales
  compararPassword(password1: string, password2: string) {
    return (formGroup: FormGroup) => {
      const pass1 = formGroup.controls[password1];
      const pass2 = formGroup.controls[password2];

      if (pass2.errors && !pass2.errors.compararPassword) {
        return;
      }

      if (pass1.value !== pass2.value) {
        pass2.setErrors({ noIguales: true });
      } else {
        pass2.setErrors(null);
      }
    };
  }
}
