'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
        primaryKey: true,
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
      password: {
        type: Sequelize.STRING,
        allowNull: false
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

    // await queryInterface.createTable('roles', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   rol: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //     unique: true
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

    // await queryInterface.createTable('cursos', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   nombreCurso: {
    //     type: Sequelize.STRING
    //   },
    //   fechaIni: {
    //     type: Sequelize.DATE
    //   },
    //   fechaFin: {
    //     type: Sequelize.DATE
    //   },
    //   fechaFinDeMatricula: {
    //     type: Sequelize.DATE
    //   },
    //   maxMatriculados: {
    //     type: Sequelize.INTEGER
    //   },
    //   minMatriculados: {
    //     type: Sequelize.INTEGER
    //   },
    //   cursoIniciado: {
    //     type: Sequelize.BOOLEAN
    //   },
    //   cursoActivo: {
    //     type: Sequelize.BOOLEAN
    //   },
    //   horasTotales: {
    //     type: Sequelize.INTEGER
    //   },
    //   monitor: {
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

    // await queryInterface.createTable('actividades', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   nombreActividad: {
    //     type: Sequelize.STRING
    //   },
    //   descripcion: {
    //     type: Sequelize.STRING
    //   },
    //   cursoId: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: 'cursos',
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

  //   await queryInterface.createTable('clases', {
  //     id: {
  //       allowNull: false,
  //       autoIncrement: true,
  //       primaryKey: true,
  //       type: Sequelize.INTEGER
  //     },
  //     inicio: {
  //       type: Sequelize.DATE
  //     },
  //     finClase: {
  //       type: Sequelize.DATE
  //     },
  //     cursoId: {
  //       type: Sequelize.INTEGER,
  //       allowNull: false,
  //       references: {
  //         model: 'cursos',
  //         key: 'id'
  //       }
  //     },
  //     createdAt: {
  //       allowNull: false,
  //       type: Sequelize.DATE
  //     },
  //     updatedAt: {
  //       allowNull: false,
  //       type: Sequelize.DATE
  //     }
  //   });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};