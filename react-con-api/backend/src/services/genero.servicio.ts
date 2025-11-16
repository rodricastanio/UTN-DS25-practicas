import prisma from '../config/prisma';
import { Genero as GeneroType } from '../types/generos.types';

// Service that fetches genres from the database via Prisma.
export async function getAllGeneros(): Promise<GeneroType[]> {
  const rows = await prisma.genero.findMany({ orderBy: { id: 'asc' } as any });
  // map DB rows to the frontend shape (destacado object)
  return rows.map(r => ({
    id: r.id,
    nombre: r.nombre,
    destacado: {
      titulo: r.destacadoTitulo,
      autor: r.destacadoAutor,
      imagen: r.destacadoImagen,
    }
  }));
}

// (optional) helper to fetch single genre
export async function getGeneroById(id: string): Promise<GeneroType | null> {
  const r = await prisma.genero.findUnique({ where: { id } });
  if (!r) return null;
  return {
    id: r.id,
    nombre: r.nombre,
    destacado: {
      titulo: r.destacadoTitulo,
      autor: r.destacadoAutor,
      imagen: r.destacadoImagen,
    }
  };
}
