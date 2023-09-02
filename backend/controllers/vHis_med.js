import { body } from "express-validator";

export const vPHisMed = [

    body("fc_Sum_HisMed")
    .notEmpty().withMessage("fc_Sum_HisMed no debe estar vacio")
    .isString().withMessage("fc_Sum_HisMed debe ser un string")
    .matches(/^(\d{4})-(\d{2})-(\d{2})$/).withMessage("fc_Sum_HisMed debe tener el formato de fecha YYYY-MM-DD")
    .isLength({ max: 10 }).withMessage("fc_Sum_HisMed debe tener máximo 10 caracteres"),

    body("id_Med_HisMed")
    .notEmpty().withMessage("id_Med_HisMed no debe estar vacio")
    .isNumeric().withMessage("id_Med_HisMed debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Med_HisMed debe ser un numero positivo");
        }
        return true;
    }),

    body("id_Animal_HisMed")
    .notEmpty().withMessage("id_Animal_HisMed no debe estar vacio")
    .isNumeric().withMessage("id_Animal_HisMed debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Animal_HisMed debe ser un numero positivo");
        }
        return true;
    }),

    body("cant_Sum_HisMed")
    .notEmpty().withMessage("cant_Sum_HisMed no debe estar vacio")
    .isString().withMessage("cant_Sum_HisMed debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("cant_Sum_HisMed solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 100 }).withMessage("cant_Sum_HisMed debe tener máximo 100 caracteres"),

    body("descripcion_HisMed")
    .notEmpty().withMessage("descripcion_HisMed no debe estar vacio")
    .isString().withMessage("descripcion_HisMed debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("descripcion_HisMed solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_HisMed debe tener máximo 250 caracteres"),

]