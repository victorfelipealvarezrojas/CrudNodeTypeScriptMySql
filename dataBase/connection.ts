import { Sequelize } from 'sequelize';

const dataBase = new Sequelize('nodets', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default dataBase;