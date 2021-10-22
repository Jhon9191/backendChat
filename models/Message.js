const sequelize = require('sequelize');
const db = require('./db');

const Message = db.define('messages', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    mensagem: {
        type: sequelize.TEXT,
        allowNull: false,
    },
    sala: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    usuarioId: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
});

//Criar tabela no banco
//Message.sync();

module.exports = Message;