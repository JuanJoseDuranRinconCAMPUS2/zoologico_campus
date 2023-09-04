import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyHisAtencion } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getHisAtencionV100, postHisAtencionV100, putHisAtencionV100, deleteHisAtencionV100 } from '../versions/1.0.0/his_atencionv1.0.0.js';
import { getHisAtencionV101, postHisAtencionV101, putHisAtencionV101, deleteHisAtencionV101 } from '../versions/1.0.1/his_atencionv1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';

const his_atencion = Router();
const version = routesVersioning();

his_atencion.get('/', version({
    "1.0.0": getHisAtencionV100
})); 

his_atencion.get('/v1.0.1', getLimit(), version({
    "1.0.1": getHisAtencionV101
})); 

his_atencion.post('/', proxyHisAtencion, version({
    "1.0.0": postHisAtencionV100
}));

his_atencion.post('/v1.0.1', postAndPutLimit(600), proxyHisAtencion, version({
    "1.0.1": postHisAtencionV101
}));

his_atencion.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteHisAtencionV100
}));

his_atencion.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteHisAtencionV101
}));

his_atencion.put('/', proxyPValidateIds, proxyHisAtencion, version({
    "1.0.0": putHisAtencionV100
}));

his_atencion.put('/v1.0.1', postAndPutLimit(600), proxyPValidateIds, proxyHisAtencion, version({
    "1.0.1": putHisAtencionV101
}));


export default his_atencion;