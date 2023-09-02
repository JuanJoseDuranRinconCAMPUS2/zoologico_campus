import { body } from "express-validator";

export const vPHisMedNeg = [

    body("id_med_HisMedNeg")
    .notEmpty().withMessage("id_med_HisMedNeg no debe estar vacio")
    .isNumeric().withMessage("id_med_HisMedNeg debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_med_HisMedNeg debe ser un numero positivo");
        }
        return true;
    }),

    body("descripcion_HisMedNeg")
    .notEmpty().withMessage("descripcion_HisMedNeg no debe estar vacio")
    .isString().withMessage("descripcion_HisMedNeg debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("descripcion_HisMedNeg solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_HisMedNeg debe tener máximo 250 caracteres"),

    body("id_Animal_HisMedNeg")
    .notEmpty().withMessage("id_Animal_HisMedNeg no debe estar vacio")
    .isNumeric().withMessage("id_Animal_HisMedNeg debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Animal_HisMedNeg debe ser un numero positivo");
        }
        return true;
    })
]