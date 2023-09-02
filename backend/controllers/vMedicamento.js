import { body } from "express-validator";

export const vPMedicamento = [

    body("nombre_Med")
    .notEmpty().withMessage("nombre_Med no debe estar vacio")
    .isString().withMessage("nombre_Med debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("nombre_Med solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 20 }).withMessage("nombre_Med debe tener máximo 20 caracteres"),

    body("caducidad_Med")
    .notEmpty().withMessage("caducidad_Med no debe estar vacio")
    .isString().withMessage("caducidad_Med debe ser un string")
    .matches(/^(\d{4})-(\d{2})-(\d{2})$/).withMessage("caducidad_Med debe tener el formato de fecha YYYY-MM-DD")
    .isLength({ max: 10 }).withMessage("caducidad_Med debe tener máximo 10 caracteres"),

    body("descripcion_Med")
    .notEmpty().withMessage("descripcion_Med no debe estar vacio")
    .isString().withMessage("descripcion_Med debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("descripcion_Med solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_Med debe tener máximo 250 caracteres")
]