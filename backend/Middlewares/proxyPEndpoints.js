import  express from 'express';
import { vPAlimento } from '../controllers/vAlimento.js';
import { validationResult } from 'express-validator';
import { vPAnimales } from '../controllers/vAnimales.js';
import { vPCliente } from '../controllers/vCliente.js';
import { vPempPago } from '../controllers/vEmp_pago.js';
import { vPEmpSeguro } from '../controllers/vEmp_seguro.js';
import { vPEmpleado } from '../controllers/vEmpleado.js';
import { vPEspecialidad } from '../controllers/vEspecialidad.js';
import { vPHabitat } from '../controllers/vHabitat.js';
import { vPHisAlimento } from '../controllers/vHis_alimento.js';
import { vPHisAtencion } from '../controllers/vHis_atencion.js';
import { vPHisExibicion } from '../controllers/vHis_exibicion.js';

const proxyPAlimento = express();
const proxyPAnimales = express();
const proxyPCliente = express();
const proxyEmpPago = express();
const proxyEmpSeguro = express();
const proxyEmpleado = express();
const proxyEspecialidad = express();
const proxyHabitat = express();
const proxyHisAlimento = express();
const proxyHisAtencion = express();
const proxyHisExibicion = express();

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

//proxy usado para validar los metodos datos de entrada de los metodos put y post en emp_pago

proxyEmpPago.use(vPempPago, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            fecha_EmpPago : fecha_Pago,
            cantidad_EmpPago : cantidad,
            descripcion_EmpPago : descripcion,
            id_Emp_EmpPago : id_Empleado
        } = req.body
        req.body = {
            fecha_Pago, cantidad, descripcion, 
            id_Empleado
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

//proxy usado para validar los metodos datos de entrada de los metodos put y post en emp_seguro

proxyEmpSeguro.use(vPEmpSeguro, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            estado_EmpSeguro : estado,
            tipo_EmpSeguro : tipo,
            precio_EmpSeguro : precio,
            fc_Expe_EmpSeguro : fecha_Expedicion,
            fc_Expi_EmpSeguro : fecha_Expiracion,
            id_Emp_EmpSeguro : id_Empleado
        } = req.body
        req.body = {
            estado, tipo, precio, 
            fecha_Expedicion, fecha_Expiracion, id_Empleado
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

//proxy usado para validar los metodos datos de entrada de los metodos put y post en empleado

proxyEmpleado.use(vPEmpleado, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            nombre_Emp : nombre,
            id_Esp_Emp : id_Especialidad,
            genero_Emp : genero,
            iden_Emp : identificacion,
            salario_Emp : salario,
            edad_Emp : edad,
            celular_Emp : celular,
            correo_Emp : correo_electronico
        } = req.body
        req.body = {
            nombre, id_Especialidad, genero, 
            identificacion, salario, edad,
            celular, correo_electronico
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

//proxy usado para validar los metodos datos de entrada de los metodos put y post en especialidad

proxyEspecialidad.use(vPEspecialidad, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            nombre_Esp : nombre,
            descripcion_Esp : descripcion
        } = req.body
        req.body = {
            nombre, descripcion
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

//proxy usado para validar los metodos datos de entrada de los metodos put y post en habitat

proxyHabitat.use(vPHabitat, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            nombre_Hab : nombre,
            dimensiones_Hab : dimensiones,
            lim_Especimenes_Hab : limite_Especimenes,
            cant_Especimenes_Hab : cantidad_Especimenes,
            precio_Mante_Hab : precio_Mantenimiento,
            descripcion_Hab : descripcion
        } = req.body
        req.body = {
            nombre, dimensiones, limite_Especimenes,
            cantidad_Especimenes, precio_Mantenimiento, descripcion
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

//proxy usado para validar los metodos datos de entrada de los metodos put y post en his_alimento

proxyHisAlimento.use(vPHisAlimento, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            fc_Sum_HisAlimento : fecha_Suministro,
            alimento_HisAlimento : alimento,
            descripcion_HisAlimento : descripcion,
            id_Animal_HisAlimento : id_Animal,
            id_Alimento_HisAlimento : id_Alimento
        } = req.body
        req.body = {
            fecha_Suministro, alimento, descripcion,
            id_Animal, id_Alimento
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

//proxy usado para validar los metodos datos de entrada de los metodos put y post en his_atencion

proxyHisAtencion.use(vPHisAtencion, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            tpo_Aten_HisAtencion : tipo_Atencion,
            medicamento_HisAtencion : medicamento,
            descripcion_HisAtencion : descripcion,
            id_Animal_HisAtencion : id_Animal
        } = req.body
        req.body = {
            tipo_Atencion, medicamento, descripcion,
            id_Animal
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

//proxy usado para validar los metodos datos de entrada de los metodos put y post en his_exibicion

proxyHisExibicion.use(vPHisExibicion, async(req, res, next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) return res.status(400).json(error)
        let { 
            fc_Ini_HisExibicion : fecha_Inicio,
            fc_Fin_HisExibicion : fecha_Fin,
            id_Animal_HisExibicion : id_Animal,
            descripcion_HisExibicion : descripcion
        } = req.body
        req.body = {
            fecha_Inicio, fecha_Fin, descripcion,
            id_Animal
        }
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {
    proxyPAlimento, 
    proxyPAnimales, 
    proxyPCliente, 
    proxyEmpPago,
    proxyEmpSeguro,
    proxyEmpleado,
    proxyEspecialidad,
    proxyHabitat,
    proxyHisAlimento,
    proxyHisAtencion,
    proxyHisExibicion
}