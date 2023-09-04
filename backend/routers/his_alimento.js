import routesVersioning  from 'express-routes-versioning';
import {Router} from 'express'
import { proxyHisAlimento } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getHisAlimentoV100, postHisAlimentoV100, putHisAlimentoV100, deleteHisAlimentoV100 } from '../versions/1.0.0/his_Alimentov1.0.0.js';
import { getHisAlimentoV101, postHisAlimentoV101, putHisAlimentoV101, deleteHisAlimentoV101 } from '../versions/1.0.1/his_Alimentov1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';

const his_alimento = Router();
const version = routesVersioning();

his_alimento.get('/', version({
    "1.0.0": getHisAlimentoV100
})); 

his_alimento.get('/v1.0.1', getLimit(), version({
    "1.0.1": getHisAlimentoV101
})); 

his_alimento.post('/', proxyHisAlimento, version({
    "1.0.0": postHisAlimentoV100
}));

his_alimento.post('/v1.0.1', postAndPutLimit(600), proxyHisAlimento, version({
    "1.0.1": postHisAlimentoV101
}));

his_alimento.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteHisAlimentoV100
}));

his_alimento.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteHisAlimentoV101
}));

his_alimento.put('/', proxyPValidateIds, proxyHisAlimento, version({
    "1.0.0": putHisAlimentoV100
}));

his_alimento.put('/v1.0.1', postAndPutLimit(600), proxyPValidateIds, proxyHisAlimento, version({
    "1.0.1": putHisAlimentoV101
}));

export default his_alimento;