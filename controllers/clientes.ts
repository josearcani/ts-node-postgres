import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { Cliente, Curso } from '../models';
import { generarJWT } from '../helpers';

export const getClientes = async( req: Request , res: Response ) => {
  const { limit = 10, page = 1 } = req.query;
  const offset = (Number(page) - 1) * Number(limit) + 1;

  const clientes = await Cliente.scope('withoutPassword').findAndCountAll({
    where: {
      estado: true
    },
    limit: Number(limit),
    offset: (offset === 1) ? 0 : offset - 1
  });
  res.json({ data: clientes });
}

export const getCliente = async( req: Request , res: Response ) => {
  const { id } = req.params;
  const cliente = await Cliente.scope('withoutPassword').findOne({
    where: {
      id,
      estado: true,
    }
  });
  if(!cliente) {
    res.status(404).json({
      msg: 'No se ha encontrado a un cliente con ese id'
    });
  } else {
    res.json({ data: cliente });
  }
}

export const postCliente = async( req: Request , res: Response ) => {
  const { nombre, apellido, email, password } = req.body;
  try {
    const existeEmail = await Cliente.scope('withoutPassword').findOne({
      where: {
        email
      }
    });

    if (existeEmail) {
      return res.status(400).json({
        msg: 'Ya existe un usuario con el correo ' + email
      });
    }
    const cliente:any = await Cliente.create({ nombre, apellido, email, password });
    
    const token = await generarJWT(cliente.email);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    cliente.password = hash;
    await cliente.save();

    const { password: pass, ...data } = cliente.dataValues;

    res.json({
      msg: 'Cliente registrado',
      token,
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    })    
  }
}

export const putCliente = async ( req: Request , res: Response ) => {
  const { id }   = req.params;
  // only updates nombre and apellido
  const { nombre, apellido ,email, password, estado, ...data } = req.body;
  
  try {
    const cliente:any = await Cliente.scope('withoutPassword').findByPk(id);
    await cliente.update({ nombre, apellido });

    res.json({
      msg: 'Cliente actualizado',
      data: cliente
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    })    
  }   
}

export const deleteCliente = async( req: Request , res: Response ) => {
  const { id } = req.params;
  const { rol, id: idDB }:any = req.usuario;
  const cliente:any = await Cliente.scope('withoutPassword').findOne({
    where: {
      id
    }
  });

  if(cliente.id === idDB || rol === 'ADMIN_ROL' || rol === 'MANAGER_ROL') {
    await cliente.update({ estado: false });
    res.json({
      msg: 'Cliente eliminado'
    });
  } else {
    res.json({
      msg: 'No es posible realizar esta operación'
    });
  }
}

export const getCursosCliente = async( req: Request , res: Response ) => {
  const { username } = req.params;
  const email = req.usuario?.email;

  const cliente = await Cliente.findAll({
    where: {
      email
    },
    include: [
      {
        model: Curso,
        attributes: ['id', 'nombreCurso', 'fechaIni', 'fechaFin', 'cursoIniciado' ]
      }
    ],
    attributes: ['id', 'nombre', 'apellido'],
  });

  res.json({
    msg: 'Cursos del cliente',
    data: cliente
  });
}