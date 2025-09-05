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

// 📌 Middlewares globales (se ejecutan antes de las rutas)

// Permite que Express entienda JSON en el body de las requests
app.use(express.json());

// Middleware que loguea cada request con método, URL, hora, etc.
app.use(logRequest);

// 📌 Rutas de la API
// Todas las rutas que empiecen con /api/books serán manejadas por bookRoutes
app.use('/api/books', bookRoutes);
app.use("/api/generos", generoRouter);

// 📌 Middleware de manejo de errores
// Tiene que ir SIEMPRE al final, porque captura cualquier error de las rutas o middlewares anteriores
app.use(handleError);

//endpoint de prueba
 app.get('/', (req, res) => {
 res.send('👋 ¡Hola esto esta funcionando correctamente!');
 });

// 📌 Arrancamos el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});



 // import express from 'express';
// const app = express();
// const PORT = 3000;
// // Endpoint Hola Mundo
// app.get('/', (req, res) => {
//     res.send('👋 ¡Hola mundo desde Express!');
// });
// // Inicio del servidor
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
// });
