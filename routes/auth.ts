import { Router } from 'express';
import { check } from 'express-validator';
import { login, googleSignIn, renewJwt } from '../controllers/auth';
import { validarCampos, validarJWT, validarRol } from '../middlewares';
import { validarUsuario } from '../middlewares/validar-usuario';
const router = Router();

router.get('/',[
  validarJWT,
  validarCampos
], renewJwt);

router.post('/login',[
  check('email', 'En necesario un correo').isEmail(),
  check('password', 'En necesario una contraseña').notEmpty(),
  validarCampos,
  validarUsuario,
], login);

export default router;
