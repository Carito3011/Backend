//const express = require ('express');
import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';

//importar archivos de ruta
import rolesRoutes from "./routes/rolesRoutes.js";
import agendaCitasRoutes from "./routes/agendaCitasRoutes.js";
import usuariosRoutes from "./routes/usuariosRoutes.js";
import especialidadesRoutes from "./routes/especialidadesRoutes.js";

//iniciar el servidor
const app = express();
app.use(express.json());//para leer los formatos json

//permitir leer archivos.env
dotenv.config();

//conectarnos a la bd
conectarDB();

//definicion de rutas
app.use("/api/roles",rolesRoutes);
app.use("/api/agendaCitas",agendaCitasRoutes);
app.use("/api/especialidades",especialidadesRoutes);
app.use("/api/usuarios",usuariosRoutes);

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
})

