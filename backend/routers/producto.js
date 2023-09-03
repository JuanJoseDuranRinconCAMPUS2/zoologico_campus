import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyProducto } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getProductoV100 , postProductoV100 , putProductoV100 , deleteProductoV100 } from '../versions/1.0.0/productov1.0.0.js';

const producto = Router();
const version = routesVersioning();

producto.get("/", version({
    "1.0.0": getProductoV100 
}));

producto.post('/', proxyProducto, version({
    "1.0.0": postProductoV100
}))

producto.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteProductoV100
}))

producto.put("/", proxyPValidateIds, proxyProducto, version({
    "1.0.0": putProductoV100
}))

export default producto;