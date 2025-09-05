import { Router } from "express";
import { genero } from "../services/genero.servicio";

const router = Router();

// GET /api/genres → devuelve los 4 géneros
router.get("/", (_req, res) => {
  res.json(genero);
});

// (Opcional) GET /api/genres/:id → devuelve un género
router.get("/:id", (req, res) => {
  const g = genero.find(x => x.id === req.params.id);
  if (!g) return res.status(404).json({ error: "Género no encontrado" });
  res.json(g);
});

 export const generoRouter = router;