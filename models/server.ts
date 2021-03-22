import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from '../routes/usuario';
import dataBase from '../dataBase/connection'

class Server {
    private app: Application;
    private port: string;

    private apiPath = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();//tiene q ir antes de que se definan las rutas 
        this.routes();
    }

    //TODO conectar BD
    async dbConnection() {
        try {
            dataBase.authenticate();
            console.log("Db online");
        } catch (error) {
            throw new Error(error);
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //Lectura Body
        this.app.use(express.json());
        //Carpeta publica
        this.app.use(express.static('public'));//directorio publico
    }


    routes() {
        this.app.use(this.apiPath.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }

}

export default Server;