import  express from 'express';
import { validationResult } from 'express-validator';
import { validatorIds } from '../controllers/vIds.js';

const proxyPValidateIds = express();

//proxy usado para validar los datos de entrada de los metodos put y delete en los endpoints

proxyPValidateIds.use(validatorIds, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        next();
    } catch (err) {
        res.status(404).send(err);
    }
});

export {
    proxyPValidateIds
}