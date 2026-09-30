import { query } from "../config/db.js";

export const postRepository = {
    async getAll(){
        const res = await query("SELECT * FROM post")
        return res.rows
    },
    async create(user_id ,post){
        const { content } = post
        const res = await query("INSERT INTO post (user_id, content) values ($1, $2)", [user_id, content])
        return res.rows[0]
    }
}

