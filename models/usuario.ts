import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('usuarios', {
  nombre: {
    type: DataTypes.STRING
  },
  apellido: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  rol: {
    type: DataTypes.ENUM('ADMIN_ROL', 'MONITOR_ROL', 'SALES_ROL', 'CLIENT_ROL')
  }
},{
  freezeTableName: true
});


export default Usuario;