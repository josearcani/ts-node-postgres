import { Request, Response } from 'express';
import { Cliente, Empleado } from '../models';
type Next = () => void | Promise<void>

export const validarUsuario = async (req:Request, res:Response, next:Next) => {
  const { email } = req.body;
  let userExist = true;

  const [empleado, cliente]:any = await Promise.all([
    Empleado.findOne({ where: { email } }),
    Cliente.findOne({ where: { email } }),
  ])

  if ( empleado === null && cliente === null){
    userExist = false;
  }

  (empleado === null) ? req.isEmployee = false : req.isEmployee = true;
  
  if (!userExist) {
    return res.status(401).json({
      msg: 'El correo o contraseña es válido - no existe literal'
    });
  }

  next();
}