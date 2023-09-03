import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyPCliente } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getClientesV100, postClientesV100, putClientesV100 , deleteClientesV100 } from '../versions/1.0.0/clientev1.0.0.js';
const cliente = Router();
const version = routesVersioning();

cliente.get("/", version({
    "1.0.0": getClientesV100
}));

cliente.post('/', proxyPCliente, version({
    "1.0.0": postClientesV100
}))

cliente.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteClientesV100
}))

cliente.put("/", proxyPValidateIds, proxyPCliente, version({
    "1.0.0": putClientesV100
}))

export default cliente;