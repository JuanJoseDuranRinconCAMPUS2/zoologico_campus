import { body } from "express-validator";

export const vPHisExibicion = [

    body("fc_Ini_HisExibicion")
    .notEmpty().withMessage("fc_Ini_HisExibicion no debe estar vacio")
    .isString().withMessage("fc_Ini_HisExibicion debe ser un string")
    .matches(/^(\d{4})-(\d{2})-(\d{2})$/).withMessage("fc_Ini_HisExibicion debe tener el formato de fecha YYYY-MM-DD")
    .isLength({ max: 10 }).withMessage("fc_Ini_HisExibicion debe tener máximo 10 caracteres"),

    body("fc_Fin_HisExibicion")
    .notEmpty().withMessage("fc_Fin_HisExibicion no debe estar vacio")
    .isString().withMessage("fc_Fin_HisExibicion debe ser un string")
    .matches(/^(\d{4})-(\d{2})-(\d{2})$/).withMessage("fc_Fin_HisExibicion debe tener el formato de fecha YYYY-MM-DD")
    .isLength({ max: 10 }).withMessage("fc_Fin_HisExibicion debe tener máximo 10 caracteres"),

    body("id_Animal_HisExibicion")
    .notEmpty().withMessage("id_Animal_HisExibicion no debe estar vacio")
    .isNumeric().withMessage("id_Animal_HisExibicion debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Animal_HisExibicion debe ser un numero positivo");
        }
        return true;
    }),

    body("descripcion_HisExibicion")
    .notEmpty().withMessage("descripcion_HisExibicion no debe estar vacio")
    .isString().withMessage("descripcion_HisExibicion debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("descripcion_HisExibicion solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_HisExibicion debe tener máximo 250 caracteres")

]