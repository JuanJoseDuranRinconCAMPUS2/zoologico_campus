import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyHabitat } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getHabitatV100 , postHabitatV100 , putHabitatV100 , deleteHabitatV100 } from '../versions/1.0.0/habitatv1.0.0.js';
const habitad = Router();
const version = routesVersioning();

habitad.get("/", version({
    "1.0.0": getHabitatV100
}));

habitad.post('/', proxyHabitat, version({
    "1.0.0": postHabitatV100
}))

habitad.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteHabitatV100
}))

habitad.put("/", proxyPValidateIds, proxyHabitat, version({
    "1.0.0": putHabitatV100
}))

export default habitad;