import { validationResult } from 'express-validator';
import { Request, Response } from 'express';

type Next = () => void | Promise<void>

export const validarCampos = (req: Request, res: Response, next: Next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
}
