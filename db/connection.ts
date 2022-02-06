import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'testUser', '$Pass123', {
    host: 'localhost',
    dialect: 'postgres',
    // logging: false,
});

export default db;
