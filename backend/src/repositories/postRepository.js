import { query } from "../config/db.js";

export const postRepository = {
    async getAll(){
        const res = await query("SELECT * FROM post")
        return res.rows
    },
    async create()
}

