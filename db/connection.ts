import { Sequelize } from 'sequelize';

// const db = new Sequelize('node', 'testUser', '$Pass123', {
//     host: 'localhost',
//     dialect: 'postgres',
//     // logging: false,
// });
const db = new Sequelize('dadb02k3sp1jh2', 'riomreuepzsnsc', 'c183f220564be229d2fa83f1449780f094e6e6d309955883d92bddacb1270ef7', {
    host: 'ec2-34-236-34-103.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export default db;
