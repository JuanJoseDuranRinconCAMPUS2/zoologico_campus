import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyEmpSeguro } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getEmpSeguroV100, postEmpSeguroV100, putEmpSeguroV100, deleteEmpSeguroV100 } from '../versions/1.0.0/emp_segurov1.0.0.js';

const emp_seguro = Router();
const version = routesVersioning();

emp_seguro.get("/", version({
    "1.0.0": getEmpSeguroV100
}));

emp_seguro.post('/', proxyEmpSeguro, version({
    "1.0.0": postEmpSeguroV100
}))

emp_seguro.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteEmpSeguroV100
}))

emp_seguro.put("/", proxyPValidateIds, proxyEmpSeguro, version({
    "1.0.0": putEmpSeguroV100
}))


export default emp_seguro;