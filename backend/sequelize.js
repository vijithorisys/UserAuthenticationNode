/* eslint-env es6 */
const { Sequelize  } = require('sequelize');
const dotenv = require('dotenv');
const config = require('./config/config.json');
const userModel = require('./models/user')

dotenv.config();

const dbConfig = config.development


const sequelize = new Sequelize(process.env.DB_NAME|| dbConfig.database, process.env.DB_USER || dbConfig.username, process.env.DB_PASSWORD || dbConfig.password, {
    host: process.env.DB_HOST || dbConfig.host,
    dialect: process.env.DB_DIALECT || dbConfig.dialect,
  });

  const user=userModel(sequelize,Sequelize)


module.exports =   {
    sequelize,
    user
    
} 
    
