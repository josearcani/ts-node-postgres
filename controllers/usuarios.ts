import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { Usuario } from '../models';

export const getUsuarios = async( req: Request , res: Response ) => {

  const { limit = 10, page = 1 } = req.query;

  const offset = (Number(page) - 1) * Number(limit) + 1;

  const usuarios = await Usuario.scope('withoutPassword').findAndCountAll({
    where: {
      estado: true
    },
    limit: Number(limit),
    offset: (offset === 1) ? 0 : offset - 1
  });
  res.json({ usuarios });
}

export const getUsuario = async( req: Request , res: Response ) => {
  const { id } = req.params;

  const usuario = await Usuario.scope('withoutPassword').findOne({
    where: {
      id,
      estado: true,
    }
  });
  if(!usuario) {
    res.status(404).json({
      msg: 'No se ha encontrado a un usuario con es id'
    });
  } else {
    res.json(usuario);
  }
}

export const postUsuario = async( req: Request , res: Response ) => {

  const { nombre, apellido, email, password, rol } = req.body;

  try {
    const existeEmail = await Usuario.scope('withoutPassword').findOne({
      where: {
        email
      }
    });

    if (existeEmail) {
      return res.status(400).json({
        msg: 'Ya existe un usuario con el correo ' + email
      });
    }

    const usuario:any = await Usuario.create({ nombre, apellido, email, password, rol });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    usuario.password = hash;
    // const usuario = new Usuario(body);
    await usuario.save();

    res.json({
      msg: 'Usuario creado',
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    })    
  }
}

export const putUsuario = async ( req: Request , res: Response ) => {
  const { id }   = req.params;
  // only updates nombre and apellido
  const { email, password, rol, estado, ...data } = req.body;
  
  try {
    const usuario:any = await Usuario.scope('withoutPassword').findByPk(id);
    await usuario.update(data);

    res.json({
      msg: 'Actualizado',
      usuario
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    })    
  }   
}


export const deleteUsuario = async( req: Request , res: Response ) => {
  const { id } = req.params;

  const usuario:any = await Usuario.scope('withoutPassword').findByPk( id );

  await usuario.update({ estado: false });
  // await usuario.destroy();
  res.json({
    msg: 'borrado'
  });
}
