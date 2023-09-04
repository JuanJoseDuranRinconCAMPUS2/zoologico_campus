import { body } from "express-validator";

export const vCreacionUsu = [

    body('nombre_Usuario')
    .isLength({ max: 255 }).withMessage('nombre_Usuario debe tener como máximo 255 caracteres')
    .matches(/^[A-Za-z0-9-\s.,!]+$/).withMessage('nombre_Usuario debe ser una cadena de texto sin caracteres especiales excepto el "-", puede contener números y mayúsculas')
    .notEmpty().withMessage('nombre_Usuario no puede estar vacío')
    .isString().withMessage("nombre_Usuario debe ser un string"),

    body('correo_Usuario')
    .isString().withMessage("correo_Usuario debe ser un string")
    .isEmail().withMessage('correo_Usuario debe ser un correo electrónico válido')
    .isLength({ max: 150 }).withMessage('correo_Usuario debe tener como máximo 150 caracteres')
    .notEmpty().withMessage('correo_Usuario no puede estar vacío'),

    body('contraseña_Usuario')
    .isString().withMessage('contraseña_Usuario debe ser un string')
    .isLength({ max: 100 }).withMessage('contraseña_Usuario debe tener como máximo 100 caracteres')
    .notEmpty().withMessage('contraseña_Usuario no puede estar vacío'),

    body('versiones_Api')
    .isArray().withMessage('versiones_Api debe ser un array'),

    body('codeRol_Usuario')
    .isLength({ max: 200 }).withMessage('codeRol_Usuario debe tener como máximo 200 caracteres')
    .matches(/^(CsWscIpEhqmr1987|CsWscYrYwyvemws22501)$/).withMessage('codeRol_Usuario debe ser un código válido suministrado por el desarrollador de la API')
    .notEmpty().withMessage('codeRol_Usuario no puede estar vacío')
    .isString().withMessage("codeRol_Usuario debe ser un string")
]