import { postRepository } from "../repositories/postRepository";

export const postService = {
    async getAll(){
        return await postRepository.getAll();
    },
    async create(user_id, reqPost){
        return await postRepository.create(user_id, reqPost)
    }
}