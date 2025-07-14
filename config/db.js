const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense_db', 'root', 'Yogu@2112', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
