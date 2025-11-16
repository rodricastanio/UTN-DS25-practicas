import { Router } from "express";
import * as generoService from "../services/genero.servicio";

const router = Router();

// GET /api/generos -> devuelve géneros desde la BD
router.get('/', async (_req, res, next) => {
  try {
    const generos = await generoService.getAllGeneros();
    res.json(generos);
  } catch (err) {
    next(err);
  }
});

// GET /api/generos/:id
router.get('/:id', async (req, res, next) => {
  try {
    const g = await generoService.getGeneroById(req.params.id);
    if (!g) return res.status(404).json({ error: 'Género no encontrado' });
    res.json(g);
  } catch (err) {
    next(err);
  }
});

export const generoRouter = router;