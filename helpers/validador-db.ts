import Rol from "../models/rol"

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

