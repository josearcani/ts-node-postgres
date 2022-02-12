// import { Router } from 'express';
// import { check } from 'express-validator';
// import { getCursos, getCurso, postCurso, putCurso, deleteCurso } from '../controllers/cursos';
// import { validarRol, validarJWT, validarCampos } from '../middlewares';
// import { idCursoExiste, isDate } from '../helpers';
// const router = Router();

// router.get('/',[
//   validarJWT,
//   validarRol('ADMIN_ROL', 'MONITOR_ROL', 'USER_ROL'),
// ], getCursos);

// router.get('/:id',[
//   validarJWT,
//   validarRol('ADMIN_ROL', 'MONITOR_ROL', 'USER_ROL'),
//   check('id', 'Debe contener un id').notEmpty(),
//   check('id', 'No es un id válido').isNumeric(),
//   validarCampos
// ], getCurso);

// router.post('/',[
//   validarJWT,
//   validarRol('ADMIN_ROL', 'MONITOR_ROL'),
//   check('nombreCurso', 'Se debe asignar un nombre al curso').notEmpty(),
//   check('fechaIni', 'Fecha de inicio es obligatoria').custom(isDate),
//   check('fechaFin', 'Se debe tener fecha de fin').custom(isDate),
//   check('fechaFinDeMatricula', 'Se debe tener fecha limite de matriculación al curso').custom(isDate),
//   check('maxMatriculados', 'Se debe tener limite máximo de inscritos').isNumeric(),
//   check('minMatriculados', 'Se debe tener limite mínimo de inscritos').isNumeric(),
//   check('cursoIniciado', 'Se ha iniciado el curso?').isBoolean(),
//   check('cursoActivo', 'El curso está activo?').isBoolean(),
//   check('horasTotales', 'Se debe asignar un nombre al curso').isNumeric(),
//   check('monitor', 'Se debe asignar un monitor al curso').isNumeric(),
//   validarCampos
// ], postCurso);

// router.put('/:id',[
//   validarJWT,
//   validarRol('ADMIN_ROL', 'MONITOR_ROL'),
//   check('id', 'Debe contener un id').notEmpty(),
//   check('id', 'No es un id válido').isNumeric(),
//   check('id').custom(idCursoExiste),
//   validarCampos
// ], putCurso);

// router.delete('/:id',[
//   validarJWT,
//   validarRol('ADMIN_ROL', 'MONITOR_ROL'),
//   check('id', 'Debe contener un id').notEmpty(),
//   check('id', 'No es un id válido').isNumeric(),
//   check('id').custom(idCursoExiste),
//   validarCampos
// ], deleteCurso);

// export default router;