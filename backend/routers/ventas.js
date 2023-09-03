import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyVentas } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getVentasV100 , postVentasV100 , putVentasV100 , deleteVentasV100 } from '../versions/1.0.0/ventasv1.0.0.js';
const ventas = Router();
const version = routesVersioning();

ventas.get("/", version({
    "1.0.0": getVentasV100 
}));

ventas.post('/', proxyVentas, version({
    "1.0.0": postVentasV100
}))

ventas.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteVentasV100
}))

ventas.put("/", proxyPValidateIds, proxyVentas, version({
    "1.0.0": putVentasV100
}))

export default ventas;