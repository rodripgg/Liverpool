import { Router } from "express";
import { usuarioController } from "../controllers/usuarioController";

const router = Router();

router.get("/", usuarioController.listarUsuarios);
router.post("/", usuarioController.crearUsuario);
router.get("/:id", usuarioController.buscarUsuarioPorId);
router.put("/:id", usuarioController.actualizarUsuarioPorId);
router.delete("/:id", usuarioController.eliminarUsuarioPorId);

export default router;
