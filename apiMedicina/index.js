//const express = require ('express');
import express from 'express';
import dotenv from 'dotenv';

//iniciar el servidor
const app = express();

//permitir leer archivos.env

dotenv.config();

const PORT=process.env.PORT;

app.listen=

