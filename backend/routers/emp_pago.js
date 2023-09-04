import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyEmpPago } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getEmpPagoV100, postEmpPagoV100, putEmpPagoV100, deleteEmpPagoV100 } from '../versions/1.0.0/emp_pagov1.0.0.js';
import { getEmpPagoV101, postEmpPagoV101, putEmpPagoV101, deleteEmpPagoV101 } from '../versions/1.0.1/emp_pagov1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';
import { proxyAutorizacionTk } from '../Middlewares/proxyManejoTokens.js';
import { proxyEndpointVerify } from '../Middlewares/proxyManejoTokens.js';

const emp_pago = Router();
const version = routesVersioning();

emp_pago.get('/', version({
    "1.0.0": getEmpPagoV100
})); 

emp_pago.get('/v1.0.1', getLimit(), version({
    "1.0.1": getEmpPagoV101
})); 

emp_pago.get('/v1.1.0', getLimit(), proxyAutorizacionTk, proxyEndpointVerify(0 , "emp_pago", "usuario", "1.1.0"), version({
    "1.1.0": getEmpPagoV101
})); 

emp_pago.post('/', proxyEmpPago, version({
    "1.0.0": postEmpPagoV100
}));

emp_pago.post('/v1.0.1', postAndPutLimit(600), proxyEmpPago, version({
    "1.0.1": postEmpPagoV101
}));

emp_pago.post('/v1.1.0', postAndPutLimit(600), proxyEmpPago, proxyAutorizacionTk, proxyEndpointVerify(1 , "emp_pago", "Admin", "1.1.0"), version({
    "1.1.0": postEmpPagoV101
}));

emp_pago.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteEmpPagoV100
}));

emp_pago.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteEmpPagoV101
}));

emp_pago.delete('/v1.1.0', deleteLimit() , proxyPValidateIds, proxyAutorizacionTk, proxyEndpointVerify(1 , "emp_pago", "Admin", "1.1.0"), version({
    "1.1.0": deleteEmpPagoV101
}));

emp_pago.put('/', proxyPValidateIds, proxyEmpPago, version({
    "1.0.0": putEmpPagoV100
}));

emp_pago.put('/v1.0.1', postAndPutLimit(600), proxyPValidateIds, proxyEmpPago, version({
    "1.0.1": putEmpPagoV101
}));

emp_pago.put('/v1.1.0', postAndPutLimit(600), proxyPValidateIds, proxyEmpPago, proxyAutorizacionTk, proxyEndpointVerify(1 , "emp_pago", "Admin", "1.1.0"), version({
    "1.1.0": putEmpPagoV101
}));

export default emp_pago;