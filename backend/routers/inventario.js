import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyInventario } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getInventarioV100 , postInventarioV100 , putInventarioV100 , deleteInventarioV100 } from '../versions/1.0.0/inventariov1.0.0.js';

const inventario = Router();
const version = routesVersioning();

inventario.get("/", version({
    "1.0.0": getInventarioV100 
}));

inventario.post('/', proxyInventario, version({
    "1.0.0": postInventarioV100
}))

inventario.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteInventarioV100
}))

inventario.put("/", proxyPValidateIds, proxyInventario, version({
    "1.0.0": putInventarioV100
}))

export default inventario;