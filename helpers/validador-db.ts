import Rol from "../models/rol"
import Usuario from "../models/usuario";

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
  const data = await Usuario.findByPk( id );
  if (!data) {
    throw new Error(`El id ${id} no existe`);
  }
}