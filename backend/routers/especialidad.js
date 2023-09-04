import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyEspecialidad } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getEspecialidadV100, postEspecialidadV100, putEspecialidadV100, deleteEspecialidadV100 } from '../versions/1.0.0/especialidadv1.0.0.js';
import { getEspecialidadV101, postEspecialidadV101, putEspecialidadV101, deleteEspecialidadV101  } from '../versions/1.0.1/especialidadv1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';
import { proxyAutorizacionTk } from '../Middlewares/proxyManejoTokens.js';
import { proxyEndpointVerify } from '../Middlewares/proxyManejoTokens.js';

const especialidad = Router();
const version = routesVersioning();

especialidad.get('/', version({
    "1.0.0": getEspecialidadV100
})); 

especialidad.get('/v1.0.1', getLimit(), version({
    "1.0.1": getEspecialidadV101
})); 

especialidad.get('/v1.1.0', getLimit(), proxyAutorizacionTk, proxyEndpointVerify(0 , "especialidad", "usuario", "1.1.0"), version({
    "1.1.0": getEspecialidadV101
})); 

especialidad.post('/', proxyEspecialidad, version({
    "1.0.0": postEspecialidadV100
}));

especialidad.post('/v1.0.1', postAndPutLimit(580), proxyEspecialidad, version({
    "1.0.1": postEspecialidadV101
}));

especialidad.post('/v1.1.0', postAndPutLimit(580), proxyEspecialidad, proxyAutorizacionTk, proxyEndpointVerify(1 , "especialidad", "Admin", "1.1.0"), version({
    "1.1.0": postEspecialidadV101
}));

especialidad.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteEspecialidadV100
}));

especialidad.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteEspecialidadV101
}));

especialidad.delete('/v1.1.0', deleteLimit() , proxyPValidateIds, proxyAutorizacionTk, proxyEndpointVerify(1 , "especialidad", "Admin", "1.1.0"), version({
    "1.1.0": deleteEspecialidadV101
}));

especialidad.put('/', proxyPValidateIds, proxyEspecialidad, version({
    "1.0.0": putEspecialidadV100
}));

especialidad.put('/v1.0.1', postAndPutLimit(580), proxyPValidateIds, proxyEspecialidad, version({
    "1.0.1": putEspecialidadV101
}));

especialidad.put('/v1.1.0', postAndPutLimit(580), proxyPValidateIds, proxyEspecialidad, proxyAutorizacionTk, proxyEndpointVerify(1 , "especialidad", "Admin", "1.1.0"), version({
    "1.1.0": putEspecialidadV101
}));

export default especialidad;