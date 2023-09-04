import {Router} from 'express'
import routesVersioning  from 'express-routes-versioning';
import { proxyTickets } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';
import { getTicketsV100, postTicketsV100, putTicketsV100, deleteTicketsV100 } from '../versions/1.0.0/ticketsv1.0.0.js';
import { getTicketsV101, postTicketsV101, putTicketsV101, deleteTicketsV101 } from '../versions/1.0.1/ticketsv1.0.1.js';
import { getLimit, postAndPutLimit , deleteLimit } from '../Middlewares/RateLimit.js';

const tickets = Router();
const version = routesVersioning();

tickets.get('/', version({
    "1.0.0": getTicketsV100
})); 

tickets.get('/v1.0.1', getLimit(), version({
    "1.0.1": getTicketsV101
})); 

tickets.post('/', proxyTickets, version({
    "1.0.0": postTicketsV100
}));

tickets.post('/v1.0.1', postAndPutLimit(500), proxyTickets, version({
    "1.0.1": postTicketsV101
}));

tickets.delete('/', proxyPValidateIds, version({
    "1.0.0": deleteTicketsV100
}));

tickets.delete('/v1.0.1', deleteLimit() , proxyPValidateIds, version({
    "1.0.1": deleteTicketsV101
}));

tickets.put('/', proxyPValidateIds, proxyTickets, version({
    "1.0.0": putTicketsV100
}));

tickets.put('/v1.0.1', postAndPutLimit(500), proxyPValidateIds, proxyTickets, version({
    "1.0.1": putTicketsV101
}));

export default tickets;