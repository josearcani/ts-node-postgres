import express, { Application } from 'express';
import empleadoRoutes from '../routes/empleado';
import clienteRoutes from '../routes/cliente';
import userAuth from '../routes/auth';
// import cursoRoutes from '../routes/curso';
import cors from 'cors';

import db from '../db/connection';

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    auth: '/api/auth',
    clientes: '/api/clientes',
    cursos: '/api/cursos',
    empleados: '/api/empleados',
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    // Métodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {

    try {
      await db.authenticate();
      console.log('Database online');
    } catch (error: any) {
      throw new Error(error);
    }

  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.auth, userAuth);
    this.app.use(this.apiPaths.empleados, empleadoRoutes);
    this.app.use(this.apiPaths.clientes, clienteRoutes);
    // this.app.use(this.apiPaths.clientes, cursoRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto ' + this.port);
    })
  }

}

export default Server;