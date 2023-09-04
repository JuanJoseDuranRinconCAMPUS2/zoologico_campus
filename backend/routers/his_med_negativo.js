import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyHisMedNeg } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getHisMedNegativoV100, postHisMedNegativoV100, putHisMedNegativoV100, deleteHisMedNegativoV100 } from '../versions/1.0.0/his_Med_Negativov1.0.0.js';
import { getHisMedNegativoV101, postHisMedNegativoV101, putHisMedNegativoV101, deleteHisMedNegativoV101 } from '../versions/1.0.1/his_Med_Negativov1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';
import { proxyAutorizacionTk } from '../Middlewares/proxyManejoTokens.js';
import { proxyEndpointVerify } from '../Middlewares/proxyManejoTokens.js';

const his_med_negativo = Router();
const version = routesVersioning();

his_med_negativo.get('/', version({
    "1.0.0": getHisMedNegativoV100
})); 

his_med_negativo.get('/v1.0.1', getLimit(), version({
    "1.0.1": getHisMedNegativoV101
})); 

his_med_negativo.get('/v1.1.0', getLimit(), proxyAutorizacionTk, proxyEndpointVerify(0 , "his_med_negativo", "usuario", "1.1.0"), version({
    "1.1.0": getHisMedNegativoV101
})); 

his_med_negativo.post('/', proxyHisMedNeg, version({
    "1.0.0": postHisMedNegativoV100
}));

his_med_negativo.post('/v1.0.1', postAndPutLimit(600), proxyHisMedNeg, version({
    "1.0.1": postHisMedNegativoV101
}));

his_med_negativo.post('/v1.1.0', postAndPutLimit(600), proxyHisMedNeg, proxyAutorizacionTk, proxyEndpointVerify(1 , "his_med_negativo", "Admin", "1.1.0"), version({
    "1.1.0": postHisMedNegativoV101
}));

his_med_negativo.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteHisMedNegativoV100
}));

his_med_negativo.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteHisMedNegativoV101
}));

his_med_negativo.delete('/v1.1.0', deleteLimit() , proxyPValidateIds, proxyAutorizacionTk, proxyEndpointVerify(1 , "his_med_negativo", "Admin", "1.1.0"), version({
    "1.1.0": deleteHisMedNegativoV101
}));

his_med_negativo.put('/', proxyPValidateIds, proxyHisMedNeg, version({
    "1.0.0": putHisMedNegativoV100
}));

his_med_negativo.put('/v1.0.1', postAndPutLimit(600), proxyPValidateIds, proxyHisMedNeg, version({
    "1.0.1": putHisMedNegativoV101
}));

his_med_negativo.put('/v1.1.0', postAndPutLimit(600), proxyPValidateIds, proxyHisMedNeg, proxyAutorizacionTk, proxyEndpointVerify(1 , "his_med_negativo", "Admin", "1.1.0"), version({
    "1.1.0": putHisMedNegativoV101
}));

export default his_med_negativo;