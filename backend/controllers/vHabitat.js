import { body } from "express-validator";

export const vPHabitat = [

    body("nombre_Hab")
    .notEmpty().withMessage("nombre_Esp no debe estar vacio")
    .isString().withMessage("nombre_Esp debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("nombre_Esp solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 100 }).withMessage("nombre_Esp debe tener máximo 100 caracteres"),

    body("dimensiones_Hab")
    .notEmpty().withMessage("dimensiones_Hab no debe estar vacio")
    .isString().withMessage("dimensiones_Hab debe ser un string")
    .matches(/^[0-9]+[mM]2$/).withMessage("dimensiones_Hab debe una unidad de metros cuadrados de las formas 'xM2' O 'Xm2' ")
    .isLength({ max: 20 }).withMessage("dimensiones_Hab debe tener máximo 20 caracteres"),

    body("lim_Especimenes_Hab")
    .notEmpty().withMessage("lim_Especimenes_Hab no debe estar vacio")
    .isNumeric().withMessage("lim_Especimenes_Hab debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("lim_Especimenes_Hab debe ser un numero positivo");
        }
        return true;
    }),

    body("cant_Especimenes_Hab")
    .notEmpty().withMessage("cant_Especimenes_Hab no debe estar vacio")
    .isNumeric().withMessage("cant_Especimenes_Hab debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("cant_Especimenes_Hab debe ser un numero positivo");
        }
        return true;
    }),

    body("precio_Mante_Hab")
    .notEmpty().withMessage("precio_Mante_Hab no debe estar vacio")
    .isNumeric().withMessage("precio_Mante_Hab debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("precio_Mante_Hab debe ser un numero positivo");
        }
        return true;
    }),

    body("descripcion_Hab")
    .notEmpty().withMessage("descripcion_Hab no debe estar vacio")
    .isString().withMessage("descripcion_Hab debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+/).withMessage("descripcion_Hab solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_Hab debe tener máximo 250 caracteres"),

]