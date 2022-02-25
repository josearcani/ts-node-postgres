import { Request, Response } from 'express';
type Next = () => void | Promise<void>

export const validarRol = ( ...rols:string[]) => {
  return (req:Request, res:Response, next:Next) => {

    if (!req.usuario) {
      return res.status(500).json({
        msg: 'Se quiere verificar el role sin validar el token primero'
      });
    }

    if (!rols.includes(req.usuario.rol)) {
      console.log("NO es un rol valido")
      return res.status(401).json({
        msg: `El servicio requiere uno de estos roles ${ rols }`
      });
    }

    next();
  }
}
