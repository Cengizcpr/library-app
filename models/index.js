import { Sequelize } from 'sequelize';
import dbConfig from '../config/db.js';
console.log(dbConfig.DB)
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Users = (await import('./users/index.js')).default(sequelize, Sequelize); 
db.Books = (await import('./books/index.js')).default(sequelize, Sequelize); 
db.UserBooks = (await import('./userBooks/index.js')).default(sequelize, Sequelize); 

db.UserBooks.belongsTo(db.Books, {
    foreignKey: 'book_id',
});
db.UserBooks.belongsTo(db.Users, {
    foreignKey: 'user_id',
});

export default db;
