import { DataTypes } from 'sequelize';
import db from '../db/connection';

export const Curso = db.define('cursos', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  nombreCurso: {
    type: DataTypes.STRING
  },
  fechaIni:{
    type: DataTypes.DATE
  },
  fechaFin:{
    type: DataTypes.DATE
  },
  fechaFinDeMatricula: {
    type: DataTypes.DATE
  },
  maxMatriculados: {
    type: DataTypes.INTEGER
  },
  minMatriculados: {
    type: DataTypes.INTEGER
  },
  cursoIniciado: {
    type: DataTypes.BOOLEAN
  },
  cursoActivo: {
    type: DataTypes.BOOLEAN
  },
  horasTotales: {
    type: DataTypes.INTEGER
  },
},{
  freezeTableName: true,
});

export const CursoCliente = db.define('cursoCliente', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  }
},{
  freezeTableName: true,
  timestamps: false
});
