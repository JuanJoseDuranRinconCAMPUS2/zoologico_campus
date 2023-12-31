import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyEmpleado } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getEmpleadoV100, postEmpleadoV100, putEmpleadoV100, deleteEmpleadoV100 } from '../versions/1.0.0/empleadov1.0.0.js';
import { getEmpleadoV101, postEmpleadoV101, putEmpleadoV101, deleteEmpleadoV101 } from '../versions/1.0.1/empleadov1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';
import { proxyAutorizacionTk } from '../Middlewares/proxyManejoTokens.js';
import { proxyEndpointVerify } from '../Middlewares/proxyManejoTokens.js';

const empleado = Router();
const version = routesVersioning();

empleado.get('/', version({
    "1.0.0": getEmpleadoV100
})); 

empleado.get('/v1.0.1', getLimit(), version({
    "1.0.1": getEmpleadoV101
})); 

empleado.get('/v1.1.0', getLimit(), proxyAutorizacionTk, proxyEndpointVerify(0 , "empleado", "usuario", "1.1.0"), version({
    "1.1.0": getEmpleadoV101
})); 

empleado.post('/', proxyEmpleado, version({
    "1.0.0": postEmpleadoV100
}));

empleado.post('/v1.0.1', postAndPutLimit(580), proxyEmpleado, version({
    "1.0.1": postEmpleadoV101
}));

empleado.post('/v1.1.0', postAndPutLimit(580), proxyEmpleado, proxyAutorizacionTk, proxyEndpointVerify(1 , "empleado", "Admin", "1.1.0"), version({
    "1.1.0": postEmpleadoV101
}));

empleado.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteEmpleadoV100
}));

empleado.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteEmpleadoV101
}));

empleado.delete('/v1.1.0', deleteLimit() , proxyPValidateIds, proxyAutorizacionTk, proxyEndpointVerify(1 , "empleado", "Admin", "1.1.0"), version({
    "1.1.0": deleteEmpleadoV101
}));

empleado.put('/', proxyPValidateIds, proxyEmpleado, version({
    "1.0.0": putEmpleadoV100
}));

empleado.put('/v1.0.1', postAndPutLimit(580), proxyPValidateIds, proxyEmpleado, version({
    "1.0.1": putEmpleadoV101
}));

empleado.put('/v1.1.0', postAndPutLimit(580), proxyPValidateIds, proxyEmpleado, proxyAutorizacionTk, proxyEndpointVerify(1 , "empleado", "Admin", "1.1.0"), version({
    "1.1.0": putEmpleadoV101
}));

export default empleado;