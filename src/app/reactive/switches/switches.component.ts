import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  formulario: FormGroup = this.fb.group({
    genero: ['F', Validators.required],
    notificaciones: [false, Validators.required],
    terminos: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'M',
    notificaciones: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formulario.reset({ ...this.persona, terminos: false });

    //esta parte permite sincronizar los cambios del formulario con el objeto persona
    //cambiando sus valores por defecto
    this.formulario.valueChanges.subscribe(({ condiciones, ...rest }) => {
      this.persona = rest;
    });
  }

  //metodo para guardar el formulario
  guardar() {
    const valorFormulario = { ...this.formulario.value };
    delete valorFormulario.terminos;
    this.persona = valorFormulario;
    console.log('Formulario', this.formulario.value, 'Persona', this.persona);
  }
}
