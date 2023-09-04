import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyProducto } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getProductoV100, postProductoV100, putProductoV100, deleteProductoV100 } from '../versions/1.0.0/productov1.0.0.js';
import { getProductoV101, postProductoV101, putProductoV101, deleteProductoV101 } from '../versions/1.0.1/productov1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';

const producto = Router();
const version = routesVersioning();

producto.get('/', version({
    "1.0.0": getProductoV100
})); 

producto.get('/v1.0.1', getLimit(), version({
    "1.0.1": getProductoV101
})); 

producto.post('/', proxyProducto, version({
    "1.0.0": postProductoV100
}));

producto.post('/v1.0.1', postAndPutLimit(500), proxyProducto, version({
    "1.0.1": postProductoV101
}));

producto.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteProductoV100
}));

producto.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteProductoV101
}));

producto.put('/', proxyPValidateIds, proxyProducto, version({
    "1.0.0": putProductoV100
}));

producto.put('/v1.0.1', postAndPutLimit(500), proxyPValidateIds, proxyProducto, version({
    "1.0.1": putProductoV101
}));

export default producto;