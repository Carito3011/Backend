import  express   from "express";
const router =  express.Router();
import {agregar,listar,eliminar,editar,listarUno} from "../controllers/especialidadesController.js"
import validarAutenticacion from "../middleware/validarAutenticacion.js";

router.get("/",validarAutenticacion,listar);
router.post("/",validarAutenticacion,agregar);
router.delete("/:id",validarAutenticacion,eliminar);
router.put("/:id",validarAutenticacion,editar);
router.get("/:id",validarAutenticacion,listarUno);

export default router; 