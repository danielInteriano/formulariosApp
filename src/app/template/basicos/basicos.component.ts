import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  valoresFormulario = {
    producto: '',
    precio: 1,
    existencia: 1,
  };

  constructor() {}

  ngOnInit(): void {}

  //Usando una referencia local para capturar el formulario
  //guardar(miFormulario:NgForm){}

  guardar() {
    console.log(this.miFormulario.value);
    this.miFormulario.resetForm({
      precio: 0,
      existencia: 0,
    });
  }

  //Función para validar el nombre del producto
  validarNombreProducto(): boolean {
    return (
      this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched
    );
  }

  //Función para validar el precio del producto
  validarPrecioProducto(): boolean {
    let valido = false;
    if (
      this.miFormulario?.controls.precio?.value <= 0 &&
      this.miFormulario?.controls.precio?.touched
    ) {
      valido = true;
      return valido;
    }
    return valido;
  }

  //Función para validar el envío del formulario
  validarFormulario(): boolean {
    if (this.miFormulario?.status === 'VALID') return false;
    else return true;
  }
}
