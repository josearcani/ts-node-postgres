import { Request, Response } from 'express';
import { generarJWT } from '../helpers/generar-jwt';
import Usuario from '../models/usuario';

// interface UsuarioDB {
//   id: string;
//   nombre: string,
//   apellido: string;
//   email: string;
//   estado: boolean;
//   rol: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

export const login = async (req: Request, res: Response) => {
  
  const { nombre, email }: { nombre: string; email: string } = req.body;

  try {
    const usuario:any  = await Usuario.findOne({
      where: {
        email
      }
    });
  
    if (!usuario) {
      return res.status(400).json({
        msg: 'El correo o contraseña es válido - correo'
      })
    }
  
    if (!usuario.estado) {
      return res.status(400).json({
        msg: 'El correo o contraseña es válido - estado false'
      })
    }
  
    // TODO validar contraseña
  
    const token = await generarJWT(usuario.email);
  
    res.json({
      msg: 'login con post',
      token,
      usuario
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Comunicarse con el administrador'
    });
  }
}

export const googleSignIn = (req: Request, res: Response) => {
  res.json({
    msg: 'login con post'
  })
}
