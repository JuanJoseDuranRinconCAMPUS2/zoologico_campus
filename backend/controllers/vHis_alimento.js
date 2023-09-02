import { body } from "express-validator";

export const vPHisAlimento = [

    body("fc_Sum_HisAlimento")
    .notEmpty().withMessage("fc_Sum_HisAlimento no debe estar vacio")
    .isString().withMessage("fc_Sum_HisAlimento debe ser un string")
    .matches(/^(\d{4})-(\d{2})-(\d{2})$/).withMessage("fc_Sum_HisAlimento debe tener el formato de fecha YYYY-MM-DD")
    .isLength({ max: 10 }).withMessage("fc_Sum_HisAlimento debe tener máximo 10 caracteres"),

    body("alimento_HisAlimento")
    .notEmpty().withMessage("alimento_HisAlimento no debe estar vacio")
    .isString().withMessage("alimento_HisAlimento debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("alimento_HisAlimento solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 50 }).withMessage("alimento_HisAlimento debe tener máximo 50 caracteres"),

    body("descripcion_HisAlimento")
    .notEmpty().withMessage("descripcion_HisAlimento no debe estar vacio")
    .isString().withMessage("descripcion_HisAlimento debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("descripcion_HisAlimento solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_HisAlimento debe tener máximo 250 caracteres"),

    body("id_Animal_HisAlimento")
    .notEmpty().withMessage("id_Animal_HisAlimento no debe estar vacio")
    .isNumeric().withMessage("id_Animal_HisAlimento debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Animal_HisAlimento debe ser un numero positivo");
        }
        return true;
    }),

    body("id_Alimento_HisAlimento")
    .notEmpty().withMessage("id_Alimento_HisAlimento no debe estar vacio")
    .isNumeric().withMessage("id_Alimento_HisAlimento debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Alimento_HisAlimento debe ser un numero positivo");
        }
        return true;
    })

]