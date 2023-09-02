import { body } from "express-validator";

export const vPHisAtencion = [

    body("tpo_Aten_HisAtencion")
    .notEmpty().withMessage("tpo_Aten_HisAtencion no debe estar vacio")
    .isString().withMessage("tpo_Aten_HisAtencion debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("tpo_Aten_HisAtencion solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 100 }).withMessage("tpo_Aten_HisAtencion debe tener máximo 100 caracteres"),

    body("medicamento_HisAtencion")
    .notEmpty().withMessage("medicamento_HisAtencion no debe estar vacio")
    .isString().withMessage("medicamento_HisAtencion debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("medicamento_HisAtencion solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 100 }).withMessage("medicamento_HisAtencion debe tener máximo 100 caracteres"),

    body("descripcion_HisAtencion")
    .notEmpty().withMessage("descripcion_HisAtencion no debe estar vacio")
    .isString().withMessage("descripcion_HisAtencion debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("descripcion_HisAtencion solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_HisAtencion debe tener máximo 250 caracteres"),

    body("id_Animal_HisAtencion")
    .notEmpty().withMessage("id_Animal_HisAtencion no debe estar vacio")
    .isNumeric().withMessage("id_Animal_HisAtencion debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Animal_HisAtencion debe ser un numero positivo");
        }
        return true;
    })

]