import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyHabitat } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getHabitatV100, postHabitatV100, putHabitatV100, deleteHabitatV100 } from '../versions/1.0.0/habitatv1.0.0.js';
import { getHabitatV101, postHabitatV101, putHabitatV101, deleteHabitatV101 } from '../versions/1.0.1/habitatv1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';
const habitad = Router();
const version = routesVersioning();

habitad.get('/', version({
    "1.0.0": getHabitatV100
})); 

habitad.get('/v1.0.1', getLimit(), version({
    "1.0.1": getHabitatV101
})); 

habitad.post('/', proxyHabitat, version({
    "1.0.0": postHabitatV100
}));

habitad.post('/v1.0.1', postAndPutLimit(580), proxyHabitat, version({
    "1.0.1": postHabitatV101
}));

habitad.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteHabitatV100
}));

habitad.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteHabitatV101
}));

habitad.put('/', proxyPValidateIds, proxyHabitat, version({
    "1.0.0": putHabitatV100
}));

habitad.put('/v1.0.1', postAndPutLimit(580), proxyPValidateIds, proxyHabitat, version({
    "1.0.1": putHabitatV101
}));

export default habitad;