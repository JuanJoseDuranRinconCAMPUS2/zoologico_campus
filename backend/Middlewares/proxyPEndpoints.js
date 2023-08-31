import  express from 'express';
import { vPAlimento } from '../controllers/vAlimento.js';
import { validationResult } from 'express-validator';

const proxyPAlimento = express();

//proxy usado para validar los metodos put y post

proxyPAlimento.use(vPAlimento, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            nombre_Alimento:nombre, descripcion_Alimento:descripcion, 
            caducidad_Alimento:caducidad , lugar_conserva_Ali:lugar_conservacion,
            tipo_Alimento:tipo_de_alimento, precio_Alimento:precio_kg
        } = req.body
        req.body = {
            nombre, descripcion, caducidad, 
            lugar_conservacion, tipo_de_alimento, precio_kg
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPAlimento}