import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyEmpPago } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getEmpPagoV100, postEmpPagoV100, putEmpPagoV100, deleteEmpPagoV100 } from '../versions/1.0.0/emp_pagov1.0.0.js';

const emp_pago = Router();
const version = routesVersioning();

emp_pago.get("/", version({
    "1.0.0": getEmpPagoV100
}));

emp_pago.post('/', proxyEmpPago, version({
    "1.0.0": postEmpPagoV100
}))

emp_pago.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteEmpPagoV100
}))

emp_pago.put("/", proxyPValidateIds, proxyEmpPago, version({
    "1.0.0": putEmpPagoV100
}))

export default emp_pago;