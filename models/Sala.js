const sequelize = require('sequelize');
const db = require('./db');

const Sala = db.define('Salas', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false,
    }
});

//Criar tabela no banco
//Sala.sync();

module.exports = Sala;