import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { Cliente, Empleado } from '../models';
import { generarJWT } from '../helpers';

export const login = async (req: Request, res: Response) => {
  
  const { email, password }: { email: string, password: string } = req.body;
  const { isEmployee } = req;
  try {

    let usuario:any;
    console.log('the user is employee', isEmployee)
    if (isEmployee) {
      usuario  = await Empleado.findOne({ where: { email } });
    } else {
      usuario  = await Cliente.findOne({ where: { email } });
    }
  
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
  
    const { password: notSEND , ...data } = usuario.dataValues; 

    res.json({
      msg: 'login',
      token,
      usuario: data
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
