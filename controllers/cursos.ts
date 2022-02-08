import { Request, Response } from 'express';
import { Usuario, Curso} from '../models';

export const getCursos = async (req:Request, res:Response) => {

  const { limit = 10, page = 1 } = req.query;

  const offset = (Number(page) - 1) * Number(limit) + 1;

  const cursos = await Curso.findAndCountAll({
    where: {
      cursoActivo: true
    },
    limit: Number(limit),
    offset: (offset === 1) ? 0 : offset - 1
  });

  res.json({
    msg: 'get todos los cursos',
    cursos
  })
}

export const getCurso = async (req:Request, res:Response) => {
  const { id } = req.params;

  const curso = await Curso.findOne({
    where: {
      id,
      cursoActivo: true,
    }
  });

  if (!curso) {
    res.status(404).json({
      msg: 'Curso no encontrado'
    })
  } else {
    res.json({
      msg: 'un solo curso a detalle',
      curso
    })
  }
}

export const postCurso = async (req:Request, res:Response) => {
  const {
    nombreCurso,
    fechaIni,
    fechaFin,
    fechaFinDeMatricula,
    maxMatriculados,
    minMatriculados,
    cursoIniciado,
    cursoActivo,
    horasTotales,
    monitor
  } = req.body;

  try {
    
    const cursoDB = await Curso.findOne({
      where: {
        nombreCurso
      }
    })

    if (cursoDB) {
      return res.status(400).json({
        msg: 'Ya existe un curso con el mismo nombre'
      })
    }

    const monitorDB = await Usuario.scope('withoutPassword').findOne({
      where: {
        id: monitor,
        rol: 'MONITOR_ROL'
      }
    });

    if (!monitorDB) {
      return res.status(400).json({
        msg: 'El instructor no es válido'
      })
    }

    const curso = await Curso.create({
      nombreCurso,
      fechaIni,
      fechaFin,
      fechaFinDeMatricula,
      maxMatriculados,
      minMatriculados,
      cursoIniciado,
      cursoActivo,
      horasTotales,
      monitor
    });

    await curso.save();
    
    res.json({
      msg: 'Curso creado',
      curso
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    })
  }
}


export const putCurso = async (req:Request, res:Response) => {
  const { id } = req.params;
  const {
    fechaIni,
    fechaFin,
    fechaFinDeMatricula,
    maxMatriculados,
    minMatriculados,
    cursoIniciado,
    cursoActivo,
    horasTotales,
    ...data
  } = req.body;

  
  const curso:any = await Curso.findByPk(id);
  await curso.update({
    fechaFin,
    fechaIni,
    fechaFinDeMatricula,
    maxMatriculados,
    minMatriculados,
    cursoIniciado,
    cursoActivo,
    horasTotales,
  })

  res.json({
    msg: 'actualizar curso',
    curso
  })
}

export const deleteCurso = async (req:Request, res:Response) => {
  const { id } = req.params;

  const curso:any = await Curso.findByPk(id);
  await curso.update({ cursoActivo: false })

  res.json({
    msg: 'Curso desactivado',
  })
}