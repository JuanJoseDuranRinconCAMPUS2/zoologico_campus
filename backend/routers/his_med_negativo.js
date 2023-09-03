import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyHisMedNeg } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getHisMedNegativoV100, postHisMedNegativoV100 , putHisMedNegativoV100 , deleteHisMedNegativoV100 } from '../versions/1.0.0/his_Med_Negativov1.0.0.js';

const his_med_negativo = Router();
const version = routesVersioning();

his_med_negativo.get("/", version({
    "1.0.0": getHisMedNegativoV100 
}));

his_med_negativo.post('/', proxyHisMedNeg, version({
    "1.0.0": postHisMedNegativoV100
}))

his_med_negativo.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteHisMedNegativoV100
}))

his_med_negativo.put("/", proxyPValidateIds, proxyHisMedNeg, version({
    "1.0.0": putHisMedNegativoV100
}))

export default his_med_negativo;