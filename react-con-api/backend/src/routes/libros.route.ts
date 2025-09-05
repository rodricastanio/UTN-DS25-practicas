import { Router } from 'express';
 import * as bookController from '../controllers/libro.controller';
 const router = Router();
 // GET /api/books -> obtengo los libros
 router.get('/', bookController.getAllBooks);
 // GET /api/books/:id -> obtengo 1 libro
router.get('/:id', bookController.getBookById);
 // POST /api/books -> creo un libro
 router.post('/', bookController.createBook);
 // PUT /api/books/:id -> actualizo un libro
 router.put('/:id', bookController.updateBook);
 export const bookRoutes = router;