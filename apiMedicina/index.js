//const express = require ('express');
import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';

//iniciar el servidor
const app = express();

//permitir leer archivos.env
dotenv.config();

//conectarnos a la bd
conectarDB();

const PORT=process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});

