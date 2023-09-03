import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyTickets } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getTicketsV100 , postTicketsV100 , putTicketsV100 , deleteTicketsV100 } from '../versions/1.0.0/ticketsv1.0.0.js';

const tickets = Router();
const version = routesVersioning();

tickets.get("/", version({
    "1.0.0": getTicketsV100 
}));

tickets.post('/', proxyTickets, version({
    "1.0.0": postTicketsV100
}))

tickets.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteTicketsV100
}))

tickets.put("/", proxyPValidateIds, proxyTickets, version({
    "1.0.0": putTicketsV100
}))

export default tickets;