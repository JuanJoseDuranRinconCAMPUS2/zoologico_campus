import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyMedicamento } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getMedicamentoV100, postMedicamentoV100, putMedicamentoV100, deleteMedicamentoV100 } from '../versions/1.0.0/medicamentov1.0.0.js';
import { getMedicamentoV101, postMedicamentoV101, putMedicamentoV101, deleteMedicamentoV101 } from '../versions/1.0.1/medicamentov1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';
import { proxyAutorizacionTk } from '../Middlewares/proxyManejoTokens.js';
import { proxyEndpointVerify } from '../Middlewares/proxyManejoTokens.js';

const medicamento = Router();
const version = routesVersioning();

medicamento.get('/', version({
    "1.0.0": getMedicamentoV100
})); 

medicamento.get('/v1.0.1', getLimit(), version({
    "1.0.1": getMedicamentoV101
})); 

medicamento.get('/v1.1.0', getLimit(), proxyAutorizacionTk, proxyEndpointVerify(0 , "medicamento", "usuario", "1.1.0"), version({
    "1.1.0": getMedicamentoV101
}));

medicamento.post('/', proxyMedicamento, version({
    "1.0.0": postMedicamentoV100
}));

medicamento.post('/v1.0.1', postAndPutLimit(500), proxyMedicamento, version({
    "1.0.1": postMedicamentoV101
}));

medicamento.post('/v1.1.0', postAndPutLimit(500), proxyMedicamento, proxyAutorizacionTk, proxyEndpointVerify(1 , "medicamento", "Admin", "1.1.0"), version({
    "1.1.0": postMedicamentoV101
}));

medicamento.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteMedicamentoV100
}));

medicamento.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteMedicamentoV101
}));

medicamento.delete('/v1.1.0', deleteLimit() , proxyPValidateIds, proxyAutorizacionTk, proxyEndpointVerify(1 , "medicamento", "Admin", "1.1.0"), version({
    "1.1.0": deleteMedicamentoV101
}));

medicamento.put('/', proxyPValidateIds, proxyMedicamento, version({
    "1.0.0": putMedicamentoV100
}));

medicamento.put('/v1.0.1', postAndPutLimit(500), proxyPValidateIds, proxyMedicamento, version({
    "1.0.1": putMedicamentoV101
}));

medicamento.put('/v1.1.0', postAndPutLimit(600), proxyPValidateIds, proxyMedicamento, proxyAutorizacionTk, proxyEndpointVerify(1 , "medicamento", "Admin", "1.1.0"), version({
    "1.1.0": putMedicamentoV101
}));

export default medicamento;