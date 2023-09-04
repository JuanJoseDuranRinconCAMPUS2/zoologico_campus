import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyHisExibicion } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getHisExhibicionV100, postHisExhibicionV100, putHisExhibicionV100, deleteHisExhibicionV100 } from '../versions/1.0.0/his_Exhibicionv1.0.0.js';
import { getHisExhibicionV101, postHisExhibicionV101, putHisExhibicionV101, deleteHisExhibicionV101 } from '../versions/1.0.1/his_Exhibicionv1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';

const his_exibicion = Router();
const version = routesVersioning();

his_exibicion.get('/', version({
    "1.0.0": getHisExhibicionV100
})); 

his_exibicion.get('/v1.0.1', getLimit(), version({
    "1.0.1": getHisExhibicionV101
})); 

his_exibicion.post('/', proxyHisExibicion, version({
    "1.0.0": postHisExhibicionV100
}));

his_exibicion.post('/v1.0.1', postAndPutLimit(600), proxyHisExibicion, version({
    "1.0.1": postHisExhibicionV101
}));

his_exibicion.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteHisExhibicionV100
}));

his_exibicion.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteHisExhibicionV101
}));

his_exibicion.put('/', proxyPValidateIds, proxyHisExibicion, version({
    "1.0.0": putHisExhibicionV100
}));

his_exibicion.put('/v1.0.1', postAndPutLimit(600), proxyPValidateIds, proxyHisExibicion, version({
    "1.0.1": putHisExhibicionV101
}));

export default his_exibicion;