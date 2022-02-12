import { Router } from 'express';
import { check } from 'express-validator';
import { getCliente, getClientes, postCliente, putCliente, deleteCliente } from '../controllers/clientes';
import { validarRol, validarJWT, validarCampos } from '../middlewares';
import { idUsuarioExiste, rolValido } from '../helpers';

const router = Router();

router.get('/',[
  validarJWT,
  validarRol('ADMIN_ROL', 'MANAGER_ROL', 'TRAINER_ROL'),
  validarCampos
], getClientes );

router.get('/:id', [
  validarJWT,
  validarRol('ADMIN_ROL', 'MANAGER_ROL', 'TRAINER_ROL'),
  check('id', 'Debe contener un id').notEmpty(),
  check('id', 'No es un id válido').isUUID(),
  validarCampos
], getCliente );

router.post('/', [
  validarJWT,
  validarRol('ADMIN_ROL', 'MANAGER_ROL'),
  check('nombre', 'Debe de tener nombre').notEmpty(),
  check('apellido', 'Debe de tener apellido').notEmpty(),
  check('email', 'Debe ser un correo válido').isEmail(),
  check('password', 'La contraseña debe tener al menos 6 characteres').isLength({ min: 6 }),
  validarCampos
], postCliente );

router.put('/:id', [
  validarJWT,
  validarRol('ADMIN_ROL', 'MANAGER_ROL', 'CLIENTE_ROL'),
  check('id', 'Debe contener un id').notEmpty(),
  check('id', 'No es un id válido').isUUID(),
  check('id').custom(idUsuarioExiste),
  validarCampos
],putCliente );

router.delete('/:id', [
  validarJWT,
  validarRol('ADMIN_ROL', 'MANAGER_ROL', 'CLIENTE_ROL'),
  check('id', 'Debe contener un id').notEmpty(),
  check('id', 'No es un id válido').isUUID(),
  check('id').custom(idUsuarioExiste),
  validarCampos
],deleteCliente );

export default router;