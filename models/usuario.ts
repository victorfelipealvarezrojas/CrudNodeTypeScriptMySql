import { DataTypes } from 'sequelize';
import dataBase from '../dataBase/connection';

const UsuarioModel = dataBase.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
});

export default UsuarioModel;
