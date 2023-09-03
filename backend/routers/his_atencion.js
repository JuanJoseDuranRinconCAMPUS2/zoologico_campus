import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyHisAtencion } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getHisAtencionV100 , postHisAtencionV100 , putHisAtencionV100 , deleteHisAtencionV100 } from '../versions/1.0.0/his_atencionv1.0.0.js';

const his_atencion = Router();
const version = routesVersioning();

his_atencion.get("/", version({
    "1.0.0": getHisAtencionV100 
}));

his_atencion.post('/', proxyHisAtencion, version({
    "1.0.0": postHisAtencionV100
}))

his_atencion.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteHisAtencionV100
}))

his_atencion.put("/", proxyPValidateIds, proxyHisAtencion, version({
    "1.0.0": putHisAtencionV100
}))


export default his_atencion;