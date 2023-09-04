import { Router } from "express";
import routesVersioning  from 'express-routes-versioning';
import { postAndPutLimit } from "../Middlewares/RateLimit.js";
import { ingresarUsuv110 } from "../versions/1.1.0/IngresarUsuariov1.1.0.js";
import { proxyExistUsuario, proxyValidateColeccion } from "../Middlewares/proxyIngresoU.js";
import { proxyIngresoUsu } from "../Middlewares/proxyPEndpoints.js";


const AppIngresoUsuario = Router();
const version = routesVersioning();

AppIngresoUsuario.get('/', postAndPutLimit(235), proxyIngresoUsu, proxyExistUsuario, proxyValidateColeccion, version({
    "1.1.0": ingresarUsuv110
}))


export default AppIngresoUsuario;