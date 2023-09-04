import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyVentas } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getVentasV100, postVentasV100, putVentasV100, deleteVentasV100 } from '../versions/1.0.0/ventasv1.0.0.js';
import { getVentasV101, postVentasV101, putVentasV101, deleteVentasV101 } from '../versions/1.0.1/ventasv1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';
import { proxyAutorizacionTk } from '../Middlewares/proxyManejoTokens.js';
import { proxyEndpointVerify } from '../Middlewares/proxyManejoTokens.js';

const ventas = Router();
const version = routesVersioning();

ventas.get('/', version({
    "1.0.0": getVentasV100
})); 

ventas.get('/v1.0.1', getLimit(), version({
    "1.0.1": getVentasV101
})); 

ventas.get('/v1.1.0', getLimit(), proxyAutorizacionTk, proxyEndpointVerify(0 , "ventas", "usuario", "1.1.0"), version({
    "1.1.0": getVentasV101
}));

ventas.post('/', proxyVentas, version({
    "1.0.0": postVentasV100
}));

ventas.post('/v1.0.1', postAndPutLimit(400), proxyVentas, version({
    "1.0.1": postVentasV101
}));

ventas.post('/v1.1.0', postAndPutLimit(400), proxyVentas, proxyAutorizacionTk, proxyEndpointVerify(1 , "ventas", "Admin", "1.1.0"), version({
    "1.1.0": postVentasV101
}));

ventas.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteVentasV100
}));

ventas.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteVentasV101
}));

ventas.delete('/v1.1.0', deleteLimit() , proxyPValidateIds, proxyAutorizacionTk, proxyEndpointVerify(1 , "ventas", "Admin", "1.1.0"), version({
    "1.1.0": deleteVentasV101
}));

ventas.put('/', proxyPValidateIds, proxyVentas, version({
    "1.0.0": putVentasV100
}));

ventas.put('/v1.0.1', postAndPutLimit(400), proxyPValidateIds, proxyVentas, version({
    "1.0.1": putVentasV101
}));

ventas.put('/v1.1.0', postAndPutLimit(400), proxyPValidateIds, proxyVentas, proxyAutorizacionTk, proxyEndpointVerify(1 , "ventas", "Admin", "1.1.0"), version({
    "1.1.0": putVentasV101
}));

export default ventas;