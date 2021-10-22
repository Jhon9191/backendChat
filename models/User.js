const sequelize = require('sequelize');
const db = require('./db');

const User = db.define('usuario', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
    }
});

//Criar tabela no banco
//User.sync({force: true});

module.exports = User;