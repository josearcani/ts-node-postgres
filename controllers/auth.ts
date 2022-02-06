import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const login = (req: Request, res: Response) => {
  
  const { nombre, email }: { nombre: string; email: string } = req.body;

  res.json({
    msg: 'login con post',
    nombre,
    email,
  })
}

export const googleSignIn = (req: Request, res: Response) => {
  res.json({
    msg: 'login con post'
  })
}
