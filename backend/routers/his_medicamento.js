import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyHisMed } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getHisMedV100, postHisMedV100 , putHisMedV100 , deleteHisMedV100 } from '../versions/1.0.0/his_Medicamentov1.0.0.js';

const his_medicamento = Router();
const version = routesVersioning();

his_medicamento.get("/", version({
    "1.0.0": getHisMedV100 
}));

his_medicamento.post('/', proxyHisMed, version({
    "1.0.0": postHisMedV100
}))

his_medicamento.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteHisMedV100
}))

his_medicamento.put("/", proxyPValidateIds, proxyHisMed, version({
    "1.0.0": putHisMedV100
}))

export default his_medicamento;