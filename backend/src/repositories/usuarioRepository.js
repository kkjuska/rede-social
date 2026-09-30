import {query} from "../config/db.js";

export const usuarioRepository = {
    async findById(id){
        console.log("chegando no repository")
        const res = await query("SELECT * FROM usuarios WHERE id = $1", [id])
        return res.rows[0]
    },
    async findbyEmail(email, senha){
        const res = await query("SELECT * FROM usuarios WHERE email = $1 AND senha = $2;", [email, senha]);
        return res.rows[0];
    }   
}