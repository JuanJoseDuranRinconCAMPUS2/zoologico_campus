import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyInventario } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getInventarioV100, postInventarioV100, putInventarioV100, deleteInventarioV100 } from '../versions/1.0.0/inventariov1.0.0.js';
import { getInventarioV101, postInventarioV101, putInventarioV101, deleteInventarioV101 } from '../versions/1.0.1/inventariov1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';

const inventario = Router();
const version = routesVersioning();

inventario.get('/', version({
    "1.0.0": getInventarioV100
})); 

inventario.get('/v1.0.1', getLimit(), version({
    "1.0.1": getInventarioV101
})); 

inventario.post('/', proxyInventario, version({
    "1.0.0": postInventarioV100
}));

inventario.post('/v1.0.1', postAndPutLimit(600), proxyInventario, version({
    "1.0.1": postInventarioV101
}));

inventario.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteInventarioV100
}));

inventario.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteInventarioV101
}));

inventario.put('/', proxyPValidateIds, proxyInventario, version({
    "1.0.0": putInventarioV100
}));

inventario.put('/v1.0.1', postAndPutLimit(600), proxyPValidateIds, proxyInventario, version({
    "1.0.1": putInventarioV101
}));

export default inventario;