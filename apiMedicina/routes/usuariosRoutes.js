import  express   from "express";
const router =  express.Router();
import {agregar,listar,eliminar,editar,listarUno} from "../controllers/usuariosController.js"

router.get("/",listar);
router.post("/",agregar);
router.get("/",eliminar);
router.post("/",editar);
router.get("/:id",listarUno);

export default router;