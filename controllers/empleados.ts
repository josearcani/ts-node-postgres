import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { Empleado } from '../models';

export const getEmpleados = async( req: Request , res: Response ) => {
  const { limit = 10, page = 1 } = req.query;
  const offset = (Number(page) - 1) * Number(limit) + 1;

  const empleados = await Empleado.scope('withoutPassword').findAndCountAll({
    where: {
      estado: true
    },
    limit: Number(limit),
    offset: (offset === 1) ? 0 : offset - 1
  });
  res.json({ data: empleados });
}

export const getEmpleado = async( req: Request , res: Response ) => {
  const { id } = req.params;
  const empleado = await Empleado.scope('withoutPassword').findOne({
    where: {
      id,
      estado: true,
    }
  });
  if(!empleado) {
    res.status(404).json({
      msg: 'No se ha encontrado a un empleado con es id'
    });
  } else {
    res.json({ data:empleado });
  }
}

export const postEmpleado = async( req: Request , res: Response ) => {
  const { nombre, apellido, email, password, rol } = req.body;
  try {
    const existeEmail = await Empleado.scope('withoutPassword').findOne({
      where: {
        email
      }
    });
    if (existeEmail) {
      return res.status(400).json({
        msg: 'Ya existe un empleado con el correo ' + email
      });
    }

    const empleado:any = await Empleado.create({ nombre, apellido, email, password, rol });
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    empleado.password = hash;
    await empleado.save();

    res.json({
      msg: 'Empleado creado',
      data: empleado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    })    
  }
}

export const putEmpleado = async ( req: Request , res: Response ) => {
  const { id }   = req.params;
  const { email, password, rol, estado, ...data } = req.body;
  try {
    const empleado:any = await Empleado.scope('withoutPassword').findByPk(id);
    await empleado.update(data);
    res.json({
      msg: 'Actualizado',
      data: empleado
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    })    
  }   
}

export const deleteEmpleado = async( req: Request , res: Response ) => {
  const { id } = req.params;
  const empleado:any = await Empleado.scope('withoutPassword').findByPk( id );
  await empleado.update({ estado: false });
  // await empleado.destroy();
  res.json({
    msg: 'Empleado eliminado'
  });
}
