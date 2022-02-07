import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
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
  
  const { email, password }: { email: string, password: string } = req.body;

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
    
    // TODO validar contraseña use bcrypt 
    const passwordValido = bcrypt.compareSync(password, usuario.password);
    if (!passwordValido) {
      return res.status(400).json({
        msg: 'El correo o contraseña es válido - constraseña'
      })
    }
  
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
