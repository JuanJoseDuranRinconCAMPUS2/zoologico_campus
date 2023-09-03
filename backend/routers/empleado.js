import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyEmpleado } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getEmpleadoV100, postEmpleadoV100, putEmpleadoV100, deleteEmpleadoV100 } from '../versions/1.0.0/empleadov1.0.0.js';

const empleado = Router();
const version = routesVersioning();

empleado.get("/", version({
    "1.0.0": getEmpleadoV100
}));

empleado.post('/', proxyEmpleado, version({
    "1.0.0": postEmpleadoV100
}))

empleado.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteEmpleadoV100
}))

empleado.put("/", proxyPValidateIds, proxyEmpleado, version({
    "1.0.0": putEmpleadoV100
}))


export default empleado;