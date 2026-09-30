import {usuarioRepository} from "../repositories/usuarioRepository.js"

export const usuarioService = {
    async getById(id){
        return await usuarioRepository.findById(id)
    },
    async login(reqUser){
        const user = await usuarioRepository.findbyEmail(reqUser.email, reqUser.senha)

        if(user){
            console.log("ihuuuullll login feito")
        }

        if(!user){
            return null
        }

        return user
    }
}