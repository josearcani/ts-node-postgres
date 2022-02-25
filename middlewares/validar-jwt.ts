import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Cliente, Empleado } from '../models';

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
      let usuario;
      const [empleado, cliente]:any = await Promise.all([
        Empleado.scope('withoutPassword').findOne({ where: { email, estado: true } }),
        Cliente.scope('withoutPassword').findOne({ where: { email, estado: true } }),
      ]);

      if(!empleado && !cliente) {
        return res.status(401).json({
          msg: 'Token no válido - email o estado'
        })
      }
      (!empleado) ? usuario = cliente : usuario = empleado
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