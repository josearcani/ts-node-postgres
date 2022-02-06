import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import userAuth from '../routes/auth';
import cors from 'cors';

import db from '../db/connection';

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: '/api/usuarios',
    auth: '/api/auth',
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
    this.app.use(this.apiPaths.usuarios, userRoutes);
    this.app.use(this.apiPaths.auth, userAuth);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto ' + this.port);
    })
  }

}

export default Server;