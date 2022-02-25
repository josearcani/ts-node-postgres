import { Cliente, Empleado, Rol, Curso } from '../models';

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
  const [empleado, cliente] = await Promise.all([
    Empleado.findByPk( id ),
    Cliente.findByPk( id ),
  ]);
  if (!empleado && !cliente) {
    throw new Error(`El id ${id} no existe`);
  }
}

export const idCursoExiste = async (id= '') => {
  const data = await Curso.findByPk( id );
  if (!data) {
    throw new Error(`El id ${id} no existe`);
  }
}