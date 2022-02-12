import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Empleado from '../models/empleado';


type Next = () => void | Promise<void>
//Resquest & { usuario: any }
export const validarJWT = async (req: Request , res: Response, next:Next) => {
  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición'
    });
  }
  
  try {
    const secret = process.env.SECRET_TOKEN_KEY;
    if (secret) {
      const { email }:any = jwt.verify(token, secret);
      const usuario:any = await Empleado.scope('withoutPassword').findOne({
        where: {
          email,
          estado: true,
        }
      });
      if(!usuario) {
        return res.status(401).json({
          msg: 'Token no válido - email o estado'
        })
      }
      req.usuario = usuario;
      next();
    } else {
      throw Error ('Ups, this was not suppose to happen :P');
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no válido'
    })
  }
}