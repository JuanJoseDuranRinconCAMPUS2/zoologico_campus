import { body } from "express-validator";

export const vPEspecialidad = [

    body("nombre_Esp")
    .notEmpty().withMessage("nombre_Esp no debe estar vacio")
    .isString().withMessage("nombre_Esp debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("nombre_Esp solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 100 }).withMessage("nombre_Esp debe tener máximo 100 caracteres"),

    body("descripcion_Esp")
    .notEmpty().withMessage("descripcion_Esp no debe estar vacio")
    .isString().withMessage("descripcion_Esp debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+/).withMessage("descripcion_Esp solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_Esp debe tener máximo 250 caracteres"),

]