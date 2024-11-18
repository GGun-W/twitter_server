import SQ, { DataTypes } from 'sequelize'
import { sequelize } from '../db/database.js'
import { name } from 'ejs'

const DateTypes = SQ.DataTypes

export const User = sequelize.define(
    'user',
    {
        id: {
            type: DateTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DateTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DateTypes.STRING(500),
            allowNull: false
        },
        name: {
            type: DateTypes.STRING(20),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        url: DataTypes.TEXT
    },
    { timestamps: false }
)

export async function findByUsername(username) {
    return User.findOne({ where: { username }})
}

export async function findById(id) {
    return User.findByPk(id)
}

export async function createUser(user) {
    return User.create(user).then((data) => data.dataValues.id)
}

