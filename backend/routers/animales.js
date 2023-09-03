import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyPAnimales } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getAnimalesV100, postAnimalesV100, putAnimalesV100, deleteAnimalesV100 } from '../versions/1.0.0/animalesv1.0.0.js';

const animales = Router();
const version = routesVersioning();

animales.get("/", version({
    "1.0.0": getAnimalesV100
}));

animales.post('/', proxyPAnimales, version({
    "1.0.0": postAnimalesV100
}))

animales.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteAnimalesV100
}))

animales.put("/", proxyPValidateIds, proxyPAnimales, version({
    "1.0.0": putAnimalesV100
}))

export default animales;