'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empleados', {
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

    await queryInterface.createTable('clientes', {
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

    await queryInterface.createTable('roles', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
        primaryKey: true,
      },
      rol: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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

    await queryInterface.createTable('cursos', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
        primaryKey: true,
      },
      nombreCurso: {
        type: Sequelize.STRING
      },
      fechaIni: {
        type: Sequelize.DATE
      },
      fechaFin: {
        type: Sequelize.DATE
      },
      fechaFinDeMatricula: {
        type: Sequelize.DATE
      },
      maxMatriculados: {
        type: Sequelize.INTEGER
      },
      minMatriculados: {
        type: Sequelize.INTEGER
      },
      cursoIniciado: {
        type: Sequelize.BOOLEAN
      },
      cursoActivo: {
        type: Sequelize.BOOLEAN
      },
      horasTotales: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      empleadoId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'empleados',
          key: 'id'
        }
      },
    });

    await queryInterface.createTable('cursoCliente', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
        primaryKey: true,
      },
      cursoId: {
        type: Sequelize.UUID,
      },
      clienteId: {
        type: Sequelize.UUID,
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