import  express   from "express";
const router =  express.Router();
import {agregar,listar,eliminar,editar,listarUno,} from "../controllers/rolesController.js"
import validarAutenticacion from "../middleware/validarAutenticacion.js";

//rutas privadas
router.get("/",validarAutenticacion,listar);
router.post("/",validarAutenticacion,agregar);
router.delete("/:id",validarAutenticacion,eliminar);
router.put("/:id",validarAutenticacion,editar);
router.get("/:id",validarAutenticacion,listarUno);

//rutas publicas
//router.post("/login",autenticar);

export default router;