import  express from 'express';
import { vPAlimento } from '../controllers/vAlimento.js';
import { validationResult } from 'express-validator';
import { vPAnimales } from '../controllers/vAnimales.js';
import { vPCliente } from '../controllers/vCliente.js';

const proxyPAlimento = express();
const proxyPAnimales = express();
const proxyPCliente = express();

//proxy usado para validar los metodos datos de entrada de los metodos put y post en alimentos

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

//proxy usado para validar los metodos datos de entrada de los metodos put y post en animales

proxyPAnimales.use(vPAnimales, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            nombre_Animales:nombre, especie_Animales:especie, 
            dieta_Animales:dieta ,  descripcion_Animales:descripcion,
            id_habitat_Ani:id_Habitat
        } = req.body
        req.body = {
            nombre, especie, dieta, 
            descripcion, id_Habitat
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

//proxy usado para validar los metodos datos de entrada de los metodos put y post en clientes

proxyPCliente.use(vPCliente, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            nombre_Cliente : nombre,
            genero_Cliente : genero,
            iden_Cliente : identificacion,
            edad_Cliente : edad,
            celular_Cliente : celular,
           correo_Cliente : correo_electronico
        } = req.body
        req.body = {
            nombre, genero, identificacion, 
            edad, celular, correo_electronico
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPAlimento, proxyPAnimales, proxyPCliente}