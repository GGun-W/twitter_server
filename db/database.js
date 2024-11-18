// import mysql from 'mysql2'
import { config } from '../config.js'
import SQ from 'sequelize'
const {host,user,database,password} = config.db
export const sequelize = new SQ.Sequelize(database,user,password,{
    host,
    dialect:'mysql',
    logging: false, // 성능이 계속 떨어져서 false가편함

})

// const pool = mysql.createPool({ //데이터 베이스 접속
//     host: config.db.host,
//     user: config.db.user,
//     database: config.db.database,
//     password: config.db.password

// })

// export const db = pool.promise() // 프로미스로 가져옴

