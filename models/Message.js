const sequelize = require('sequelize');
const db = require('./db');
const User = require('./User');
const Sala = require('./Sala');

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

Message.belongsTo(User, {foreignKey: 'usuarioId',allowNull: false})
Message.belongsTo(Sala, {foreignKey: 'sala',allowNull: false})

//Criar tabela no banco
//Message.sync({alter: true});
//Message.sync();
module.exports = Message;