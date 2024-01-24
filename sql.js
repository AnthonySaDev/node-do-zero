import 'dotenv/config'
import postgres from "postgres";

const URL = process.env.DATABASE_URL

export const sql = postgres(URL,{ssl: 'require'})
