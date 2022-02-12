import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Rol = db.define('roles', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  rol: {
    type: DataTypes.STRING,
    defaultValue: 'CLIENT_ROL',
  }
},{
  freezeTableName: true
});


export default Rol;