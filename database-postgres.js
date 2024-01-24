import { sql } from "./sql.js"
import { randomUUID } from "crypto"

export class DatabasePostgres {
  async list(search) {

    let videos

    if (search) {
      videos = sql`SELECT * FROM videos WHERE title ILIKE ${'%' + search + '%'}`
    }
    else {
      videos = sql`SELECT * FROM videos`
    }
    return videos
  }

  async create(video) {
    const videoId = randomUUID()
    await sql`INSERT INTO videos (id, title, description, duration) VALUES (${videoId},${video.title}, ${video.description}, ${video.duration})`
  }


  async update(id, video) {
    await sql`UPDATE videos SET title = ${video.title}, description = ${video.description}, duration = ${video.duration} WHERE id = ${id}`
  }

  async delete(id) {
  await sql`DELETE FROM videos WHERE id = ${id}`
  }


}