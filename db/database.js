import mysql from 'mysql2'
import { config } from '../config.js'

const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    database: config.db.database,
    password: config.db.password
})

// const query = `
// SELECT users.id AS user_id, users.username, users.name, users.email, users.url, tweets.id AS tweet_id, tweets.text, tweets.createdAt
// FROM users
// INNER JOIN tweets ON users.id = tweets.userId;
// `;

// pool.query(query, (err, results) => {
//     if(err){
//     console.error('오류: ', err)
//     return
//     }
//     console.log('성공', results)
// })

export const db = pool.promise()