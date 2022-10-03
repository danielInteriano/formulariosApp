import { FormControl } from '@angular/forms';

export const patronNombre: string = '([A-Za-z]+) ([A-Za-z]+)';
export const emailPatron: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

//función para obtener el campo del usuario y validarlo contra el backend
export const obtenerUsuario = (control: FormControl) => {
  const usuario: string = control.value;
  console.log(usuario);
  if (usuario === 'daniel123') {
    return { usuario: 'no válido' };
  }
  return null;
};
