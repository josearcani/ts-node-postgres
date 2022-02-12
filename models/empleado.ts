import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Empleado = db.define('empleados', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull : false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM('ADMIN_ROL', 'MANAGER_ROL', 'TRAINER_ROL', 'VENTA_ROL'),
    // defaultValue: 'VENTA_ROL'
  }
},{
  // freezeTableName: true,
  // tableName: 'Employees',
  scopes: {
    withoutPassword: {
      attributes: { exclude: ['password'] }
    }
  }
});

// db.sync({ alter: true });

export default Empleado;