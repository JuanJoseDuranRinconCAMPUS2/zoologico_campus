import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyPCliente } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getClientesV100, postClientesV100, putClientesV100, deleteClientesV100 } from '../versions/1.0.0/clientev1.0.0.js';
import { getClientesV101, postClientesV101, putClientesV101, deleteClientesV101 } from '../versions/1.0.1/clientev1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';

const cliente = Router();
const version = routesVersioning();

cliente.get('/', version({
    "1.0.0": getClientesV100
})); 

cliente.get('/v1.0.1', getLimit(), version({
    "1.0.1": getClientesV101
})); 

cliente.post('/', proxyPCliente, version({
    "1.0.0": postClientesV100
}));

cliente.post('/v1.0.1', postAndPutLimit(300), proxyPCliente, version({
    "1.0.1": postClientesV101
}));

cliente.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteClientesV100
}));

cliente.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteClientesV101
}));

cliente.put('/', proxyPValidateIds, proxyPCliente, version({
    "1.0.0": putClientesV100
}));

cliente.put('/v1.0.1', postAndPutLimit(300), proxyPValidateIds, proxyPCliente, version({
    "1.0.1": putClientesV101
}));

export default cliente;