import dotenv from 'dotenv';
import express from 'express';
import alimento from './routers/alimento.js';
import animales from './routers/animales.js';
import cliente from './routers/cliente.js';
import emp_pago from './routers/emp_pago.js';
import emp_seguro from './routers/emp_seguro.js';
import empleado from './routers/empleado.js';
import especialidad from './routers/especialidad.js';
import habitad from './routers/habitad.js';
import his_alimento from './routers/his_alimento.js';
import his_atencion from './routers/his_atencion.js';
import his_exibicion from './routers/his_exibicion.js';
import his_med_negativo from './routers/his_med_negativo.js';
import his_medicamento from './routers/his_medicamento.js';
import inventario from './routers/inventario.js'
import medicamento from './routers/medicamento.js';
import producto from './routers/producto.js'
import tickets from './routers/tickets.js'
import ventas from './routers/ventas.js'

console.clear();
dotenv.config();
const Express=express();

Express.use(express.json());

//Funciones de manejo de data: 
// ┌────── ☆ ─────────────
Express.use('/alimento',alimento);
Express.use('/animales',animales);
Express.use('/cliente',cliente);
Express.use('/emp_pago',emp_pago);
Express.use('/emp_seguro',emp_seguro);
Express.use('/empleado',empleado);
Express.use('/especialidad',especialidad);
Express.use('/habitad',habitad);
Express.use('/his_alimento',his_alimento);
Express.use('/his_atencion',his_atencion);
Express.use('/his_exibicion',his_exibicion);
Express.use('/his_med_negativo',his_med_negativo);
Express.use('/his_medicamento',his_medicamento);
Express.use('/inventario',inventario);
Express.use('/medicamento',medicamento);
Express.use('/producto',producto);
Express.use('/tickets',tickets);
Express.use('/ventas',ventas);
// └───────────── ☆ ──────


const config=JSON.parse(process.env.MY_CONFIG);
Express.listen(config,()=>{console.log(`http://${config.hostname}:${config.port}`)});