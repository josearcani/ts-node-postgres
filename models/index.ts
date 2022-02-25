import db from '../db/connection';
// import Actividad from './actividad';
// import Clase from './clase';
import Cliente from './cliente';
import Curso from './curso';
import Empleado from './empleado';
import Rol from './rol';

Empleado.hasMany(Curso);
Curso.belongsTo(Empleado);

(async () => {
  await db.sync({ alter: true });
})()

export {
  // Actividad,
  // Clase,
  Cliente,
  Curso,
  Empleado,
  Rol,
}