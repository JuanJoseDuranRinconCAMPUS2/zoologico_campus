import routesVersioning  from 'express-routes-versioning';
import {Router} from 'express'
import { proxyHisAlimento } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getHisAlimentoV100, postHisAlimentoV100, putHisAlimentoV100, deleteHisAlimentoV100 } from '../versions/1.0.0/his_Alimentov1.0.0.js';

const his_alimento = Router();
const version = routesVersioning();

his_alimento.get("/", version({
    "1.0.0": getHisAlimentoV100 
}));

his_alimento.post('/', proxyHisAlimento, version({
    "1.0.0": postHisAlimentoV100
}))

his_alimento.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteHisAlimentoV100
}))

his_alimento.put("/", proxyPValidateIds, proxyHisAlimento, version({
    "1.0.0": putHisAlimentoV100
}))

export default his_alimento;