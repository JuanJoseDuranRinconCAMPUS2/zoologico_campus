import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyEspecialidad } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getEspecialidadV100 , postEspecialidadV100 , putEspecialidadV100 , deleteEspecialidadV100 } from '../versions/1.0.0/especialidadv1.0.0.js';

const especialidad = Router();
const version = routesVersioning();

especialidad.get("/", version({
    "1.0.0": getEspecialidadV100
}));

especialidad.post('/', proxyEspecialidad, version({
    "1.0.0": postEspecialidadV100
}))

especialidad.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteEspecialidadV100
}))

especialidad.put("/", proxyPValidateIds, proxyEspecialidad, version({
    "1.0.0": putEspecialidadV100
}))

export default especialidad;