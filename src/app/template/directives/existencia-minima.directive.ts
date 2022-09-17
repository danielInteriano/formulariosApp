import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[existenciaMinima][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ExistenciaMinimaDirective,
      multi: true,
    },
  ],
})
export class ExistenciaMinimaDirective implements Validator {
  @Input() minimo!: number;

  constructor() {}

  //Función que validad el imput que controla la existencia del producto
  validate(control: FormControl) {
    const valorExistencia = control.value;
    return valorExistencia < this.minimo ? { existenciaMinima: true } : null;
  }
}
