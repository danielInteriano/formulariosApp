import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  @ViewChild('Formulario') Formulario!: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Daniel',
    favoritos: [
      { id: 1, nombre: 'Contra' },
      { id: 2, nombre: 'Super Mario' },
    ],
  };

  guardar() {
    console.log(this.Formulario.value);
  }

  //Función para validar el nombre
  validarNombre() {
    return this.Formulario?.controls.nombre?.errors;
  }

  //Función para eliminar un favorito
  eliminarFavorito(elemento: number) {
    this.persona.favoritos.splice(elemento, 1);
    console.log(this.persona);
  }

  //Función para agregar un favorito
  agregarFavorito() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }
}
