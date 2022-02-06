'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nombre: 'Tobey',
        apellido: 'Lee',
        email: 'tobey@test.com',
        password: 'secret',
        estado: true,
        rol: 'ADMIN_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Chris',
        apellido: 'McDonald',
        email: 'chris@test.com',
        password: 'secret',
        estado: true,
        rol: 'MONITOR_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Sandy',
        apellido: 'Jest',
        email: 'sandra@test.com',
        password: 'secret',
        estado: true,
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Carol',
        apellido: 'Marsh',
        email: 'carol@test.com',
        password: 'secret',
        estado: true,
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Lin',
        apellido: 'Smith',
        email: 'lin@test.com',
        password: 'secret',
        estado: true,
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

    await queryInterface.bulkInsert('roles', [
      {
        rol: 'ADMIN_ROL'
      },
      {
        rol: 'MONITOR_ROL'
      },
      {
        rol: 'USER_ROL'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('', null, {});
  }
};
