import { usuarioService } from "../services/usuarioService.js";

export const usuarioController = {
    async getById(req, res) {
        try {
            console.log("chegand no controller")
            const getById = await usuarioService.getById(req.params.id)
            res.status(200).json(getById)
        } catch (error) {
            res.status(500).json({ erro: error.message })
        }
    },
    async login(req, res) {
        try {
            const login = await usuarioService.login(req.body)

            if(!login){
                return res.status(401).json({ erro: "Email ou senha invalidos!"})
            }

            res.status(200).json(login)
        } catch (error) {
            res.status(500).json({ erro: error.message })
        }
    }

}