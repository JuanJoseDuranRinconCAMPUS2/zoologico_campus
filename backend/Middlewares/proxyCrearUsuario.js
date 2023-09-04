import  express from 'express';
import { conx } from "../Database/connection.js"
import errorcontroller from './ErroresMongo.js';

let db = await conx();

const proxyUsuarios = express();
let usuario_Api = db.collection("usuario_Api");

let validorExistenciaValores = async (nombre, valor) => {
    return await usuario_Api.findOne({ [nombre]: valor });
}

let ErrorValidacion = (res, mensaje) => {
     res.status(409).send(mensaje);
}

let versiones = [
    "1.0.0",
    "1.0.1",
    "1.1.0"
]

proxyUsuarios.use(async(req, res, next)=>{
    try {
        let nombreVal = await validorExistenciaValores("nombre", req.body.nombre);
        if (nombreVal) {
            let mensaje = {status: 409, message: `El usuario con el nombre de usuario: '${nombreVal.nombre}', ya está registrado en la base de datos.`};
            ErrorValidacion(res, mensaje);
            return;
        }

        let emailVal = await validorExistenciaValores("email", req.body.email);
        if (emailVal) {
            let mensaje = {status: 409, message: `El usuario con el email: '${emailVal.email}', ya está registrado en la base de datos.`};
            ErrorValidacion(res, mensaje);
            return;
        }

        let versions = req.body.versiones;

        versions.forEach(element => {
            const versionSelect = versiones.indexOf(element);
            if (versionSelect < 0) {
                let mensaje = {status: 409, message: `La ruta:'${element}', no existe en el endpoint, por favor intentelo nuevamente`};
                return res.status(409).send(mensaje);
            }
        });
    
        next();
    } catch (error) {
      errorcontroller(error, res);
    }
});
export {proxyUsuarios};