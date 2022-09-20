import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent {
  @ViewChild('formulario') formulario!: NgForm;

  persona = {
    genero: '',
    notificaciones: false,
  };

  terminosCondiciones: boolean = false;

  //Método para mostrar alerta para seleccionar el género
  alertaGenero() {
    Swal.fire({
      icon: 'info',
      title: 'Género',
      text: 'Seleccione una opción para el género',
    });
  }

  //Método para mostrar alerta para activar las notificaciones
  alertaNotificaciones() {
    Swal.fire({
      icon: 'info',
      title: 'Notificaciones',
      text: 'Usted debe activar las notificaciones',
    });
  }

  //Método para mostrar alerta para aceptar los términos y condiciones
  alertaTerminos() {
    Swal.fire({
      icon: 'info',
      title: 'Términos y Condiciones',
      text: 'Debe aceptar los términos y condiciones.',
    });
  }

  //Método para lanzar alerta de que el formulario se guardó
  alertaGuardarExitoso() {
    Swal.fire({
      icon: 'success',
      title: 'Guardado!',
      text: 'Los datos fueron guardados exitosamente.',
    });
  }

  //Método para validar guardado del formulario
  validarGuardar() {
    if (this.formulario?.controls.genero?.touched === false) {
      this.alertaGenero();
    } else if (this.formulario?.controls.notificaciones?.value === false) {
      this.alertaNotificaciones();
    } else if (this.formulario?.controls.terminos?.value === false) {
      this.alertaTerminos();
    } else {
      this.alertaGuardarExitoso();
    }
  }

  //Método para guardar el formulario
  guardar() {
    this.validarGuardar();
  }
}
