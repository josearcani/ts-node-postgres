import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { Cliente } from '../models';

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
  res.json({ clientes });
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
    res.json(cliente);
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

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    cliente.password = hash;
    await cliente.save();

    res.json({
      msg: 'Cliente creado',
      cliente,
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
      cliente
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
