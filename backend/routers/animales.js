import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyPAnimales } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getAnimalesV100, postAnimalesV100, putAnimalesV100, deleteAnimalesV100 } from '../versions/1.0.0/animalesv1.0.0.js';
import { getAnimalesV101, postAnimalesV101, putAnimalesV101, deleteAnimalesV101 } from '../versions/1.0.1/animalesv1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';

const animales = Router();
const version = routesVersioning();

animales.get('/', version({
    "1.0.0": getAnimalesV100
})); 

animales.get('/v1.0.1', getLimit(), version({
    "1.0.1": getAnimalesV101
})); 

animales.post('/', proxyPAnimales, version({
    "1.0.0": postAnimalesV100
}));

animales.post('/v1.0.1', postAndPutLimit(300), proxyPAnimales, version({
    "1.0.1": postAnimalesV101
}));

animales.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteAnimalesV100
}));

animales.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteAnimalesV101
}));

animales.put('/', proxyPValidateIds, proxyPAnimales, version({
    "1.0.0": putAnimalesV100
}));

animales.put('/v1.0.1', postAndPutLimit(300), proxyPValidateIds, proxyPAnimales, version({
    "1.0.1": putAnimalesV101
}));

export default animales;