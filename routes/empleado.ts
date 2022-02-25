import { Router } from 'express';
import { check } from 'express-validator';
import { getEmpleado, getEmpleados, postEmpleado, putEmpleado, deleteEmpleado } from '../controllers/empleados';
import { validarRol, validarJWT, validarCampos } from '../middlewares';
import { idUsuarioExiste, rolValido } from '../helpers';

const router = Router();

router.get('/',[
  validarJWT,
  validarRol('ADMIN_ROL', 'MANAGER_ROL'),
  validarCampos
], getEmpleados );

router.get('/:id', [
  validarJWT,
  validarRol('ADMIN_ROL', 'MANAGER_ROL'),
  check('id', 'Debe contener un id').notEmpty(),
  check('id', 'No es un id válido').isUUID(),
  validarCampos
], getEmpleado );

router.post('/', [
  validarJWT,
  validarRol('ADMIN_ROL', 'MANAGER_ROL'),
  check('nombre', 'Debe de tener nombre').notEmpty(),
  check('apellido', 'Debe de tener apellido').notEmpty(),
  check('email', 'Debe ser un correo válido').isEmail(),
  check('password', 'La contraseña debe tener al menos 6 characteres').isLength({ min: 6 }),
  check('rol').custom(rolValido),
  validarCampos
], postEmpleado );

router.put('/:id', [
  check('id', 'Debe contener un id').notEmpty(),
  check('id', 'No es un id válido').isUUID(),
  check('id').custom(idUsuarioExiste),
  check('rol').custom(rolValido),
  validarCampos
],putEmpleado );

router.delete('/:id', [
  validarJWT,
  validarRol('ADMIN_ROL', 'MANAGER_ROL'),
  check('id', 'Debe contener un id').notEmpty(),
  check('id', 'No es un id válido').isUUID(),
  check('id').custom(idUsuarioExiste),
  validarCampos
],deleteEmpleado );

export default router;
