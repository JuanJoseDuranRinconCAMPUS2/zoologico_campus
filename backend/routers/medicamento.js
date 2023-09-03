import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyMedicamento } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getMedicamentoV100, postMedicamentoV100 , putMedicamentoV100 , deleteMedicamentoV100 } from '../versions/1.0.0/medicamentov1.0.0.js';

const medicamento = Router();
const version = routesVersioning();

medicamento.get("/", version({
    "1.0.0": getMedicamentoV100 
}));

medicamento.post('/', proxyMedicamento, version({
    "1.0.0": postMedicamentoV100
}))

medicamento.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteMedicamentoV100
}))

medicamento.put("/", proxyPValidateIds, proxyMedicamento, version({
    "1.0.0": putMedicamentoV100
}))

export default medicamento;