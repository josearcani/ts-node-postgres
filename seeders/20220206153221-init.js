'use strict';
const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('empleados', [
      {
        id: '0de75fdb-b2ee-4885-a490-5e641c7e695a',
        nombre: 'Ariana',
        apellido: 'Art',
        email: 'ariana@test.com',
        password: '$2a$10$5s7KWZjfkSvUUgXpL1flOOmBGXdZSLO6us7Ghnj40bJz/wI54YKkG',
        estado: true,
        rol: 'ADMIN_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0de75fdb-b2ee-3485-a490-5e641c7e695a',
        nombre: 'Donal',
        apellido: 'Terry',
        email: 'donald@test.com',
        password: '$2a$10$CJhAK9g0AGnOYuSJFI0nOeywT.oUwZ9oZK658qrBDzF19e6xGFULa',
        estado: true,
        rol: 'MANAGER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0de90fdb-b2ee-4885-a490-5e641c7e695a',
        nombre: 'Susan',
        apellido: 'Ortiz',
        email: 'susan@test.com',
        password: '$2a$10$VLLycBujqCmJopkv7ptKnOHMPZzjNMbFdnZbuh07jEs39a7UUHgGy',
        estado: true,
        rol: 'TRAINER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c2565d02-75ee-4821-bfd4-ff763c542785',
        nombre: 'Steve',
        apellido: 'Long',
        email: 'steve@test.com',
        password: '$2a$10$6BNo0AQmbRrQOHEtNdsIn.mnZSzee/8VNiPTFEBG5ytmTVCm1draS',
        estado: true,
        rol: 'TRAINER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});

    await queryInterface.bulkInsert('clientes', [
      {
        id: '0de75fdb-b2ee-4885-a290-3e641c7e695a',
        nombre: 'Peter',
        apellido: 'Parker',
        email: 'peter@test.com',
        password: '$2a$10$uFHGChUEf0zJNy4y0XjfMec14nOlHrwrAMh7xSZr.QArW0NhuiwXW',
        estado: true,
        rol: 'CLIENTE_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0de75fdb-b2ee-4885-a490-5e641c7e125a',
        nombre: 'Bruce',
        apellido: 'Banner',
        email: 'bruce@test.com',
        password: '$2a$10$uq2ffsJA1aLJ5N7I6nyNYevrqdFwtLMt39cWNXUYcjrhdNMMql6kK',
        estado: true,
        rol: 'CLIENTE_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0de55fdb-b2ee-4885-a490-5e641c7e699a',
        nombre: 'Adam',
        apellido: 'West',
        email: 'adam@test.com',
        password: '$2a$10$0pOS7e4qG3TTcjkbyRLSN.qUJzOCEGHKcmcjCVE9oENRqieIrZDji',
        estado: true,
        rol: 'CLIENTE_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0de75fdb-b2ee-4885-a490-5e641c7e595b',
        nombre: 'Harley',
        apellido: 'Odds',
        email: 'harley@test.com',
        password: '$2a$10$g92dT.lgTVlN0ZHFgK.Ai.lNLJv0E1HY.OE7knZOAhTO/CocqY4xe',
        estado: true,
        rol: 'CLIENTE_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0de75fdb-b2ee-4890-a190-5e641c7e595b',
        nombre: 'Patricia',
        apellido: 'Star',
        email: 'patricia@test.com',
        password: '$2a$10$Bbzoh00atXkZ4/p0loojwew0O93VyMvNsrgjzSYSbpjyzyhGzg.mS',
        estado: true,
        rol: 'CLIENTE_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5de75fdb-b7ee-4890-a190-5e641c7e595b',
        nombre: 'Dolores',
        apellido: 'Mendieta',
        email: 'dolores@test.com',
        password: '$2a$10$aN5RgWW5fiUQtd3KEj5wFug.Xb0GPqqUjh4D.MyuHPH4fB4gpaweG',
        estado: true,
        rol: 'CLIENTE_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0de75fdb-b2ee-4820-a290-2e641c7e295b',
        nombre: 'Adal',
        apellido: 'Ramones',
        email: 'adal@test.com',
        password: '$2a$10$xjOEKsuL2iHyHJY9gAoycOqn9GOcPgknJLXkTHGc2RYUUesjnT1Ri',
        estado: true,
        rol: 'CLIENTE_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0de79fdb-b5ee-4590-a140-5e641c7e595b',
        nombre: 'Milhouse',
        apellido: 'VanHouten',
        email: 'milhouse@test.com',
        password: '$2a$10$T5RZnrYl69hz2pFY/rXrkOz7KCnx.lpd4rcFF23jHyn.7epAF7vfC',
        estado: true,
        rol: 'CLIENTE_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('roles', [
      {
        id: '0de80fdb-b5ee-4590-a140-5e641c7e595b',
        rol: 'ADMIN_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0de81fdb-b5ee-4590-a140-5e641c7e595b',
        rol: 'MANAGER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0de81fdb-b5ee-7990-a171-5e641c7e975b',
        rol: 'TRAINER_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0de81fdb-b5ee-7990-a717-5e641c7e595b',
        rol: 'VENTAS_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0de82fdb-b5ee-5590-a140-5e641c7e595b',
        rol: 'CLIENTE_ROL',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    
    await queryInterface.bulkInsert('cursos', [
      {
        id: '2d033528-0256-491e-88b0-2d5af5864a40',
        nombreCurso: 'Yoga para abuelitos',
        fechaIni: new Date(),
        fechaFin: new Date(),
        fechaFinDeMatricula: new Date(),
        maxMatriculados: 30,
        minMatriculados: 10,
        cursoIniciado: false,
        cursoActivo: true,
        horasTotales: 5,
        empleadoId: '0de90fdb-b2ee-4885-a490-5e641c7e695a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2d033528-5602-491e-88b0-2d5af5864a40',
        nombreCurso: 'Pilates',
        fechaIni: new Date(),
        fechaFin: new Date(),
        fechaFinDeMatricula: new Date(),
        maxMatriculados: 10,
        minMatriculados: 5,
        cursoIniciado: true,
        cursoActivo: true,
        horasTotales: 2,
        empleadoId: 'c2565d02-75ee-4821-bfd4-ff763c542785',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2d033528-0256-491e-99b0-2d5af5840a40',
        nombreCurso: 'Salai Fitness',
        fechaIni: new Date(),
        fechaFin: new Date(),
        fechaFinDeMatricula: new Date(),
        maxMatriculados: 50,
        minMatriculados: 30,
        cursoIniciado: false,
        cursoActivo: true,
        horasTotales: 8,
        empleadoId: '0de90fdb-b2ee-4885-a490-5e641c7e695a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

    // await queryInterface.bulkInsert('actividades', [
    //   {
    //     nombreActividad: 'Actividad 1',
    //     descripcion: new Date(),
    //     cursoId: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     nombreActividad: 'Actividad 2',
    //     descripcion: new Date(),
    //     cursoId: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     nombreActividad: 'Actividad 3',
    //     descripcion: new Date(),
    //     cursoId: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ], {});

    // await queryInterface.bulkInsert('clases', [
    //   {
    //     inicio: new Date(),
    //     finClase: new Date(),
    //     cursoId: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     inicio: new Date(),
    //     finClase: new Date(),
    //     cursoId: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     inicio: new Date(),
    //     finClase: new Date(),
    //     cursoId: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('', null, {});
  }
};
