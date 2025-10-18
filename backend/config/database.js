const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  database: 'guven_akisi',
  username: 'root',
  password: process.env.DB_PASSWORD || '123456',
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;