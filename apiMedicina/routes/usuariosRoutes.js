import  express   from "express";
const router =  express.Router();
import {agregar,listar,eliminar,editar,listarUno, autenticar} from "../controllers/usuariosController.js"
import validarAutenticacion from "../middleware/validarAutenticacion.js";

// rutas crud privadas
router.get("/listar", validarAutenticacion, listar);
router.get("/:id", validarAutenticacion, listarUno);
router.post("/", validarAutenticacion, agregar);
router.put("/:id", validarAutenticacion, editar);
router.delete("/:id", validarAutenticacion, eliminar);

// rutas login publicas
router.post("/login",autenticar);
//router.post("/crear-cuanta",crearCuenta);


export default router;