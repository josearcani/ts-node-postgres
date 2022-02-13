import { DataTypes } from 'sequelize/types';
// import Actividad from './actividad';
// import Clase from './clase';
import Curso from './curso';
import Rol from './rol';
import Empleado from './empleado';
import Cliente from './cliente';
import db from '../db/connection';

Empleado.hasMany(Curso);
Curso.belongsTo(Empleado);

(async () => {
  await db.sync({ alter: true });
})()

export {
  // Actividad,
  // Clase,
  Curso,
  Rol,
  Cliente,
  Empleado,
}