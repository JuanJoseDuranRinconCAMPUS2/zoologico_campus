import { body } from "express-validator";

export const vPCliente = [

    body("nombre_Cliente")
    .notEmpty().withMessage("nombre_Cliente no debe estar vacio")
    .isString().withMessage("nombre_Cliente debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("nombre_Cliente solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 100 }).withMessage("nombre_Cliente debe tener máximo 100 caracteres"),

    body("genero_Cliente")
    .notEmpty().withMessage("genero_Cliente no debe estar vacio")
    .isString().withMessage("genero_Cliente debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("genero_Cliente solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 20 }).withMessage("genero_Cliente debe tener máximo 20 caracteres"),

    body("iden_Cliente")
    .notEmpty().withMessage("iden_Cliente no debe estar vacio")
    .isString().withMessage("iden_Cliente debe ser un string")
    .matches(/^[1-9][0-9]*$/).withMessage("iden_Cliente solo puede contener una secuencia de caracteres numérricos")
    .isLength({ max: 20 }).withMessage("iden_Cliente debe tener máximo 20 caracteres")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "string")) {
            throw new Error("iden_Cliente debe ser un string con numeros positivos");
        }
        return true;
    }),

    body("edad_Cliente")
    .notEmpty().withMessage("edad_Cliente no debe estar vacio")
    .isString().withMessage("edad_Cliente debe ser un string")
    .matches(/^[1-9][0-9]*$/).withMessage("edad_Cliente solo puede contener una secuencia de caracteres numérricos")
    .isLength({ max: 3 }).withMessage("edad_Cliente debe tener máximo 3 caracteres")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "string")) {
            throw new Error("iden_Cliente debe ser un string con numeros positivos");
        }
        return true;
    }),

    body("celular_Cliente")
    .notEmpty().withMessage("celular_Cliente no debe estar vacio")
    .isString().withMessage("celular_Cliente debe ser un string")
    .matches(/^[1-9][0-9]*$/).withMessage("celular_Cliente solo puede contener una secuencia de caracteres numérricos")
    .isLength({ max: 16 }).withMessage("celular_Cliente debe tener máximo 16 caracteres")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "string")) {
            throw new Error("iden_Cliente debe ser un string con numeros positivos");
        }
        return true;
    }),

    body("correo_Cliente")
    .notEmpty().withMessage("correo_Cliente no debe estar vacio")
    .isString().withMessage("correo_Cliente debe ser un string")
    .isEmail().withMessage("correo_Cliente solo puede contener un correo electronico valido ")
    .isLength({ max: 150 }).withMessage("correo_Cliente debe tener máximo 150 caracteres")
]