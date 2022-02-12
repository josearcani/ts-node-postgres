import Rol from "../models/rol"
// import Curso from "../models/curso";
import Empleado from "../models/empleado";

export const rolValido = async (rol = '') => {
  const rolExiste = await Rol.findOne({
    where: {
      rol
    }
  });
  if (!rolExiste) {
    throw new Error('No es un rol válido');
  }
}

export const idUsuarioExiste = async (id= '') => {
  const data = await Empleado.findByPk( id );
  if (!data) {
    throw new Error(`El id ${id} no existe`);
  }
}

// export const idCursoExiste = async (id= '') => {
//   const data = await Curso.findByPk( id );
//   if (!data) {
//     throw new Error(`El id ${id} no existe`);
//   }
// }