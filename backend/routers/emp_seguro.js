import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyEmpSeguro } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getEmpSeguroV100, postEmpSeguroV100, putEmpSeguroV100, deleteEmpSeguroV100 } from '../versions/1.0.0/emp_segurov1.0.0.js';
import { getEmpSeguroV101, postEmpSeguroV101, putEmpSeguroV101, deleteEmpSeguroV101 } from '../versions/1.0.1/emp_segurov1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';

const emp_seguro = Router();
const version = routesVersioning();

emp_seguro.get('/', version({
    "1.0.0": getEmpSeguroV100
})); 

emp_seguro.get('/v1.0.1', getLimit(), version({
    "1.0.1": getEmpSeguroV101
})); 

emp_seguro.post('/', proxyEmpSeguro, version({
    "1.0.0": postEmpSeguroV100
}));

emp_seguro.post('/v1.0.1', postAndPutLimit(600), proxyEmpSeguro, version({
    "1.0.1": postEmpSeguroV101
}));

emp_seguro.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteEmpSeguroV100
}));

emp_seguro.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteEmpSeguroV101
}));

emp_seguro.put('/', proxyPValidateIds, proxyEmpSeguro, version({
    "1.0.0": putEmpSeguroV100
}));

emp_seguro.put('/v1.0.1', postAndPutLimit(600), proxyPValidateIds, proxyEmpSeguro, version({
    "1.0.1": putEmpSeguroV101
}));


export default emp_seguro;