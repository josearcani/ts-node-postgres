import { Router } from 'express';
import { check } from 'express-validator';
import { login, googleSignIn } from '../controllers/auth';
import { validarCampos } from '../middlewares/validar-campos';
const router = Router();

router.post('/login',[
  check('email', 'En necesario un correo').isEmail(),
  check('password', 'En necesario una contraseña').notEmpty(),
  validarCampos
], login);

export default router;