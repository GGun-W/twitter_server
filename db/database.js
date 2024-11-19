import { config } from '../config.js'
import MongoDb from 'mongodb'

let db

export async function connectDB() {
    return MongoDb.MongoClient.connect(config.db.host, {
    }).then((client) => {
        db = client.db() // 객체를 전역으로 사용할 수 있게
    })
}