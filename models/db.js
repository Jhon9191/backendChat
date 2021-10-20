const Sequelize = require('sequelize');

const sequelize = new Sequelize('joao', 'root', '12211221',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(()=>{
    console.log('Succes');
}).catch(()=>{
    console.log('Error');
});

module.exports = sequelize;