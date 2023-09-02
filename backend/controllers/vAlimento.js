import { body } from "express-validator";

export const vPAlimento = [
    body("nombre_Alimento")
    .notEmpty().withMessage("nombre_Alimento no debe estar vacio")
    .isString().withMessage("nombre_Alimento debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("nombre_Alimento solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 50 }).withMessage("nombre_Alimento debe tener máximo 50 caracteres"),

    body("descripcion_Alimento")
    .notEmpty().withMessage("descripcion_Alimento no debe estar vacio")
    .isString().withMessage("descripcion_Alimento debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("descripcion_Alimento solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_Alimento debe tener máximo 250 caracteres"),

    body("caducidad_Alimento")
    .notEmpty().withMessage("caducidad_Alimento no debe estar vacio")
    .isString().withMessage("caducidad_Alimento debe ser un string")
    .matches(/^(\d{4})-(\d{2})-(\d{2})$/).withMessage("caducidad_Alimento debe tener el formato de fecha YYYY-MM-DD")
    .isLength({ max: 10 }).withMessage("caducidad_Alimento debe tener máximo 10 caracteres"),

    body("lugar_conserva_Ali")
    .notEmpty().withMessage("lugar_conserva_Ali no debe estar vacio")
    .isString().withMessage("lugar_conserva_Ali debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("lugar_conserva_Ali solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 30 }).withMessage("lugar_conserva_Ali debe tener máximo 30 caracteres"),

    body("tipo_Alimento")
    .notEmpty().withMessage("tipo_Alimento no debe estar vacio")
    .isString().withMessage("tipo_Alimento debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("tipo_Alimento solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 50 }).withMessage("tipo_Alimento debe tener máximo 50 caracteres"),

    body("precio_Alimento")
    .notEmpty().withMessage("precio_Alimento no debe estar vacio")
    .isNumeric().withMessage("precio_Alimento debe ser un numero")
    .matches(/^[1-9][0-9]*$/).withMessage("precio_Alimento solo puede ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("El precio debe ser un número positivo");
        }
        return true;
    })
]