import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyHisMed } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getHisMedV100, postHisMedV100, putHisMedV100, deleteHisMedV100 } from '../versions/1.0.0/his_Medicamentov1.0.0.js';
import { getHisMedV101, postHisMedV101, putHisMedV101, deleteHisMedV101 } from '../versions/1.0.1/his_Medicamentov1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';
import { proxyAutorizacionTk } from '../Middlewares/proxyManejoTokens.js';
import { proxyEndpointVerify } from '../Middlewares/proxyManejoTokens.js';

const his_medicamento = Router();
const version = routesVersioning();

his_medicamento.get('/', version({
    "1.0.0": getHisMedV100
})); 

his_medicamento.get('/v1.0.1', getLimit(), version({
    "1.0.1": getHisMedV101
})); 

his_medicamento.get('/v1.1.0', getLimit(), proxyAutorizacionTk, proxyEndpointVerify(0 , "his_medicamento", "usuario", "1.1.0"), version({
    "1.1.0": getHisMedV101
})); 

his_medicamento.post('/', proxyHisMed, version({
    "1.0.0": postHisMedV100
}));

his_medicamento.post('/v1.0.1', postAndPutLimit(600), proxyHisMed, version({
    "1.0.1": postHisMedV101
}));

his_medicamento.post('/v1.1.0', postAndPutLimit(600), proxyHisMed, proxyAutorizacionTk, proxyEndpointVerify(1 , "his_medicamento", "Admin", "1.1.0"), version({
    "1.1.0": postHisMedV101
}));

his_medicamento.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteHisMedV100
}));

his_medicamento.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteHisMedV101
}));

his_medicamento.delete('/v1.1.0', deleteLimit() , proxyPValidateIds, proxyAutorizacionTk, proxyEndpointVerify(1 , "his_medicamento", "Admin", "1.1.0"), version({
    "1.1.0": deleteHisMedV101
}))

his_medicamento.put('/', proxyPValidateIds, proxyHisMed, version({
    "1.0.0": putHisMedV100
}));

his_medicamento.put('/v1.0.1', postAndPutLimit(600), proxyPValidateIds, proxyHisMed, version({
    "1.0.1": putHisMedV101
}));

his_medicamento.put('/v1.1.0', postAndPutLimit(600), proxyPValidateIds, proxyHisMed, proxyAutorizacionTk, proxyEndpointVerify(1 , "his_medicamento", "Admin", "1.1.0"), version({
    "1.1.0": putHisMedV101
}));

export default his_medicamento;