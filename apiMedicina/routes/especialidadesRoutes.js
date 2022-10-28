import  express   from "express";
const router =  express.Router();
import {agregar,listar,eliminar,editar,listarUno} from "../controllers/especialidadesController.js"

router.get("/",listar);
router.post("/",agregar);
router.delete("/",eliminar);
router.put("/",editar);
router.get("/:id",listarUno);

export default router; 