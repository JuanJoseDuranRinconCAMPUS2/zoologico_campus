import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyHisExibicion } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getHisExhibicionV100 , postHisExhibicionV100 , putHisExhibicionV100 , deleteHisExhibicionV100 } from '../versions/1.0.0/his_Exhibicionv1.0.0.js';

const his_exibicion = Router();
const version = routesVersioning();

his_exibicion.get("/", version({
    "1.0.0": getHisExhibicionV100 
}));

his_exibicion.post('/', proxyHisExibicion, version({
    "1.0.0": postHisExhibicionV100
}))

his_exibicion.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteHisExhibicionV100
}))

his_exibicion.put("/", proxyPValidateIds, proxyHisExibicion, version({
    "1.0.0": putHisExhibicionV100
}))

export default his_exibicion;