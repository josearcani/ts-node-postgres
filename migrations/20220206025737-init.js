'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      rol: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rol: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
    });


    // await queryInterface.createTable('gimnasios', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   title: {
    //     type: Sequelize.STRING
    //   },
    //   usuarioId: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: 'usuarios',
    //       key: 'id'
    //     }
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });

    // await queryInterface.createTable('clientes', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   nombre: {
    //     type: Sequelize.STRING
    //   },
    //   apellido: {
    //     type: Sequelize.STRING
    //   },
    //   email: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //     unique: true
    //   },
    //   estado: {
    //     type: Sequelize.BOOLEAN,
    //     allowNull: false
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};