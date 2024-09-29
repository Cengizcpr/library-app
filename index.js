import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import morgan from 'morgan';
import { log } from 'mercedlogger';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './models/index.js'; 
const port = process.env.PORT || 3000;
const app = express();

// Veritabanı senkronizasyonu
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

import usersRouter from './router/user.route.js';
import booksRouter from './router/book.route.js';

app.use('/users', usersRouter);
app.use('/books', booksRouter);

app.listen(port, () => log.green('Server is running on port', port));

export default app; 
