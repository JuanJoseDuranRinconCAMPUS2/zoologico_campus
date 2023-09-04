import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyPAlimento } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getAlimentoV100 , postAlimentoV100, putAlimentoV100, deleteAlimentoV100 } from '../versions/1.0.0/alimentov1.0.0.js';
import { getAlimentoV101 , postAlimentoV101, putAlimentoV101, deleteAlimentoV101 } from '../versions/1.0.1/alimentov1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';

const alimento = Router();
const version = routesVersioning();

alimento.get('/', version({
    "1.0.0": getAlimentoV100
})); 

alimento.get('/v1.0.1', getLimit(), version({
    "1.0.1": getAlimentoV101
})); 

alimento.post('/', proxyPAlimento, version({
    "1.0.0": postAlimentoV100
}));

alimento.post('/v1.0.1', postAndPutLimit(288), proxyPAlimento, version({
    "1.0.1": postAlimentoV101
}));

alimento.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteAlimentoV100
}));

alimento.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteAlimentoV101
}));

alimento.put('/', proxyPValidateIds, proxyPAlimento, version({
    "1.0.0": putAlimentoV100
}));

alimento.put('/v1.0.1', postAndPutLimit(288), proxyPValidateIds, proxyPAlimento, version({
    "1.0.1": putAlimentoV101
}));

export default alimento;   