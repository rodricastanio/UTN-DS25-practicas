// Importamos la librería express
import express from 'express';

// Importamos las rutas de libros (todas las URLs relacionadas con "books")
import { bookRoutes } from './routes/libros.route';

import { generoRouter } from './routes/generos.route'

// Importamos el middleware que maneja errores globales
import { handleError } from './middlewares/error.middleware';

// Importamos el middleware que registra cada request en consola
import { logRequest } from './middlewares/logger.middleware';

import cors from "cors";

// Creamos la aplicación de Express (nuestro servidor)
const app = express();

// Definimos el puerto donde va a escuchar el servidor
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));

// 📌 Middlewares globales
app.use(express.json());
app.use(logRequest);

// 📌 Rutas oficiales
app.use('/books', bookRoutes);
app.use('/generos', generoRouter);

// 📌 Rutas legacy (compatibilidad con tu frontend actual)
app.use('/api/books', bookRoutes);
app.use('/api/generos', generoRouter);

// endpoint de prueba
app.get('/', (req, res) => {
  res.send('👋 ¡Hola esto esta funcionando correctamente!');
});

// 📌 Middleware de manejo de errores (SIEMPRE al final)
app.use(handleError);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
