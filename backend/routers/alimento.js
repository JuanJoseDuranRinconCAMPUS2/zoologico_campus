import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyPAlimento } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getAlimentoV100 , postAlimentoV100, putAlimentoV100, deleteAlimentoV100 } from '../versions/1.0.0/alimentov1.0.0.js';

const alimento = Router();
const version = routesVersioning();

alimento.get('/',  version({
    "1.0.0": getAlimentoV100
}));

alimento.post('/', proxyPAlimento, version({
    "1.0.0": postAlimentoV100
}));

alimento.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteAlimentoV100
}));

alimento.put('/', proxyPValidateIds, proxyPAlimento, version({
    "1.0.0": putAlimentoV100
}));

export default alimento;   