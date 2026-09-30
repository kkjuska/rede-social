import {usuarioRepository} from "../repositories/usuarioRepository.js"

export const usuarioService = {
    async getById(id){
        return await usuarioRepository.findById(id)
    },
    async login(reqUser){

        const { email, senha } = reqUser

        const user = await usuarioRepository.findbyEmail(email, senha)
        if(user){
            console.log("ihuuuullll login feito")
        }

        if(!user){
            console.log("usuario não encontrado!")
            return null
        }

        return user
    }
}