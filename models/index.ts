import db from '../db/connection';
// import Actividad from './actividad';
// import Clase from './clase';
import Cliente from './cliente';
import {Curso, CursoCliente} from './curso';
import Empleado from './empleado';
import Rol from './rol';

Empleado.hasMany(Curso);
Curso.belongsTo(Empleado);

Curso.belongsToMany(Cliente, { through: "cursoCliente" });
Cliente.belongsToMany(Curso, { through: "cursoCliente" });

// (async () => {
//   await db.sync({ alter: true });
// })()

export {
  // Actividad,
  CursoCliente,
  Cliente,
  Curso,
  Empleado,
  Rol,
}