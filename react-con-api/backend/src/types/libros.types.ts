export interface Book {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  genero: string;
  imagen: string
 }
 export interface CreateBookRequest {
  titulo: string;
  autor: string;
  descripcion: string;
  genero: string;
  imagen: string
 }
 export interface UpdateBookRequest {
  titulo: string;
  autor: string;
  descripcion: string;
  genero: string;
  imagen: string
 }
 export interface BookResponse {
  book: Book;
  message: string;
 }
 export interface BooksListResponse {
  books: Book[];
  total: number;
 }