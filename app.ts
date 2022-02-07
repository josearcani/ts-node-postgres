import dotenv from 'dotenv';
import Server from './models/server';
declare module 'express-serve-static-core' {
  interface Request {
    usuario?: Usuario
  }
  interface Response {
    myField?: string
  }
}

interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  password?: string
}
// Configurar dot.env
dotenv.config();

const server = new Server();

server.listen();
