import { body } from "express-validator";

export const vIngresoUsu = [

    body('nombre_Usuario')
    .isLength({ max: 255 }).withMessage('nombre_Usuario debe tener como máximo 255 caracteres')
    .matches(/^[A-Za-z0-9-\s.,!]+$/).withMessage('nombre_Usuario debe ser una cadena de texto sin caracteres especiales excepto el "-", puede contener números y mayúsculas')
    .notEmpty().withMessage('nombre_Usuario no puede estar vacío')
    .isString().withMessage("nombre_Usuario debe ser un string"),

    body('contraseña_Usuario')
    .isString().withMessage('contraseña_Usuario debe ser un string')
    .isLength({ max: 100 }).withMessage('contraseña_Usuario debe tener como máximo 100 caracteres')
    .notEmpty().withMessage('contraseña_Usuario no puede estar vacío'),

    body('endPoint_Solicitado')
    .isString().withMessage('endPoint_Solicitado debe ser una cadena de texto')
    .isLength({ max: 255 }).withMessage('endPoint_Solicitado debe tener como máximo 255 caracteres')
    .matches(/^[A-Za-z0-9-\s.,!_]+$/).withMessage('endPoint_Solicitado debe ser una cadena de texto sin caracteres especiales excepto el "-", puede contener números y mayúsculas')
    .notEmpty().withMessage('endPoint_Solicitado no puede estar vacío'),

]