export interface Destacado {
  titulo: string;
  autor: string;
  imagen: string;
}

export interface Genero {
  id: string;        // ej: "romance", "psicologia"...
  nombre: string;    // ej "Romance", "Psicología"...
  destacado: Destacado;
}