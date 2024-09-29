import express from 'express';
const router = express.Router();


import { validateRequest } from '../middleware/validate.request.js';
import { bookSchema } from '../schemas/index.js'; 
import { verifyToken } from '../middleware/verify.token.js'; 

import {add} from '../controller/books/create.book.js'; 
import {getBook} from '../controller/books/get.book.js'; 
import {getBooks} from '../controller/books/get.books.js'; 
import {update} from '../controller/books/update.book.js'; 
import {remove} from '../controller/books/delete.book.js'; 
import {points} from '../controller/books/score.book.js'; 


router.post('/', verifyToken, validateRequest(bookSchema), add);
router.get('/:bookId',getBook);
router.get('/', getBooks);
router.patch('/', verifyToken, validateRequest(bookSchema),update);
router.delete('/:bookId', verifyToken, remove);
router.post('/score', verifyToken, points);

export default router;
