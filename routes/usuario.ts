import { Router } from 'express';
import { check } from 'express-validator';
import { getUsuario, getUsuarios, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuarios';
import { idUsuarioExiste, rolValido } from '../helpers/validador-db';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/', getUsuarios );

router.get('/:id', [
  check('id', 'Debe contener un id').notEmpty(),
  check('id', 'No es un id válido').isNumeric(),
  validarCampos
], getUsuario );

router.post('/', [
  check('nombre', 'Debe de tener nombre').notEmpty(),
  check('apellido', 'Debe de tener apellido').notEmpty(),
  check('email', 'Debe ser un correo válido').isEmail(),
  check('password', 'La contraseña debe tener al menos 6 characteres').isLength({ min: 6 }),
  check('rol').custom(rolValido),
  validarCampos
], postUsuario );

router.put('/:id',[
  check('id', 'Debe contener un id').notEmpty(),
  check('id', 'No es un id válido').isNumeric(),
  check('id').custom(idUsuarioExiste),
  check('rol').custom(rolValido),
  validarCampos
],putUsuario );

router.delete('/:id', deleteUsuario );


export default router;