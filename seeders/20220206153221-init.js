'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nombre: 'Ariana',
        apellido: 'Art',
        email: 'ariana@test.com',
        password: '$2a$10$5s7KWZjfkSvUUgXpL1flOOmBGXdZSLO6us7Ghnj40bJz/wI54YKkG',
        estado: true,
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Donal',
        apellido: 'Terry',
        email: 'donald@test.com',
        password: '$2a$10$CJhAK9g0AGnOYuSJFI0nOeywT.oUwZ9oZK658qrBDzF19e6xGFULa',
        estado: true,
        rol: 'ADMIN_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Susan',
        apellido: 'Ortiz',
        email: 'susan@test.com',
        password: '$2a$10$VLLycBujqCmJopkv7ptKnOHMPZzjNMbFdnZbuh07jEs39a7UUHgGy',
        estado: true,
        rol: 'MONITOR_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Peter',
        apellido: 'Parker',
        email: 'peter@test.com',
        password: '$2a$10$uFHGChUEf0zJNy4y0XjfMec14nOlHrwrAMh7xSZr.QArW0NhuiwXW',
        estado: true,
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Bruce',
        apellido: 'Banner',
        email: 'bruce@test.com',
        password: '$2a$10$uq2ffsJA1aLJ5N7I6nyNYevrqdFwtLMt39cWNXUYcjrhdNMMql6kK',
        estado: true,
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Adam',
        apellido: 'West',
        email: 'adam@test.com',
        password: '$2a$10$0pOS7e4qG3TTcjkbyRLSN.qUJzOCEGHKcmcjCVE9oENRqieIrZDji',
        estado: true,
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Harley',
        apellido: 'Odds',
        email: 'harley@test.com',
        password: '$2a$10$g92dT.lgTVlN0ZHFgK.Ai.lNLJv0E1HY.OE7knZOAhTO/CocqY4xe',
        estado: true,
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Patricia',
        apellido: 'Star',
        email: 'patricia@test.com',
        password: '$2a$10$Bbzoh00atXkZ4/p0loojwew0O93VyMvNsrgjzSYSbpjyzyhGzg.mS',
        estado: true,
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Dolores',
        apellido: 'Mendieta',
        email: 'dolores@test.com',
        password: '$2a$10$aN5RgWW5fiUQtd3KEj5wFug.Xb0GPqqUjh4D.MyuHPH4fB4gpaweG',
        estado: true,
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Adal',
        apellido: 'Ramones',
        email: 'adal@test.com',
        password: '$2a$10$xjOEKsuL2iHyHJY9gAoycOqn9GOcPgknJLXkTHGc2RYUUesjnT1Ri',
        estado: true,
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Milhouse',
        apellido: 'VanHouten',
        email: 'milhouse@test.com',
        password: '$2a$10$T5RZnrYl69hz2pFY/rXrkOz7KCnx.lpd4rcFF23jHyn.7epAF7vfC',
        estado: true,
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('roles', [
      {
        rol: 'ADMIN_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rol: 'MONITOR_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rol: 'USER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('', null, {});
  }
};
