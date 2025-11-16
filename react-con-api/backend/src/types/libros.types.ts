import { Book as PrismaBook } from '../generated/prisma';

// Usamos el tipo Book que genera Prisma
export type Book = PrismaBook;

export interface CreateBookRequest {
  titulo: string;
  autor: string;
  // Estos pueden venir o no, y en la DB pueden ser null
  descripcion?: string | null;
  genero: string; // genero es obligatorio según schema.prisma
  imagen?: string | null;
  precio: number;
}

export interface UpdateBookRequest {
  // Para update todo puede ser opcional
  titulo?: string;
  autor?: string;
  descripcion?: string | null;
  genero?: string; // no puede ser null porque el campo en DB no acepta null
  imagen?: string | null;
  precio?: number;
}

export interface BookResponse {
  book: Book;
  message: string;
}

export interface BooksListResponse {
  books: Book[];
  total: number;
}
