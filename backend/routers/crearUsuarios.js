import { Router } from "express";
import routesVersioning  from 'express-routes-versioning';
import { creacionUsuv110 } from "../versions/1.1.0/crearUsuariosv1.1.0.js";
import { proxyUsuarios } from "../Middlewares/proxyCrearUsuario.js";
import { proxyCreacionUsu } from "../Middlewares/proxyPEndpoints.js";
import {postAndPutLimit } from '../Middlewares/RateLimit.js';

const AppCrearUsuario = Router();
const version = routesVersioning();

AppCrearUsuario.post('/', postAndPutLimit(235), proxyCreacionUsu, proxyUsuarios, version({
    "1.1.0": creacionUsuv110
}))


export default AppCrearUsuario;