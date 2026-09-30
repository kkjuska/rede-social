import { usuarioController } from "../controllers/usuarioController.js";
import { Router } from "express";

console.log("chegando no router")

const userRouter = Router()

userRouter.get('user/:id', usuarioController.getById);
userRouter.post('user/login', usuarioController.login);

export default userRouter