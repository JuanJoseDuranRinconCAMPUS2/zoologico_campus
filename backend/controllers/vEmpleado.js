import { body } from "express-validator";

export const vPEmpleado = [

    body("nombre_Emp")
    .notEmpty().withMessage("nombre_Emp no debe estar vacio")
    .isString().withMessage("nombre_Emp debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("nombre_Emp solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 100 }).withMessage("nombre_Emp debe tener máximo 100 caracteres"),

    body("id_Esp_Emp")
    .notEmpty().withMessage("id_Esp_Emp no debe estar vacio")
    .isNumeric().withMessage("id_Esp_Emp debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Esp_Emp debe ser un numero positivo");
        }
        return true;
    }),

    body("genero_Emp")
    .notEmpty().withMessage("genero_Emp no debe estar vacio")
    .isString().withMessage("genero_Emp debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("genero_Emp solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 20 }).withMessage("genero_Emp debe tener máximo 20 caracteres"),

    body("iden_Emp")
    .notEmpty().withMessage("iden_Emp no debe estar vacio")
    .isString().withMessage("iden_Emp debe ser un string")
    .matches(/^[1-9][0-9]*$/).withMessage("iden_Emp solo puede contener una secuencia de caracteres numérricos")
    .isLength({ max: 20 }).withMessage("iden_Emp debe tener máximo 20 caracteres")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "string")) {
            throw new Error("iden_Emp debe ser un string con numeros positivos");
        }
        return true;
    }),

    body("salario_Emp")
    .notEmpty().withMessage("salario_Emp no debe estar vacio")
    .isNumeric().withMessage("salario_Emp debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("salario_Emp debe ser un numero positivo");
        }
        return true;
    }),

    body("edad_Emp")
    .notEmpty().withMessage("edad_Emp no debe estar vacio")
    .isString().withMessage("edad_Emp debe ser un string")
    .matches(/^[1-9][0-9]*$/).withMessage("edad_Emp solo puede contener una secuencia de caracteres numérricos")
    .isLength({ max: 3 }).withMessage("edad_Emp debe tener máximo 3 caracteres")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "string")) {
            throw new Error("edad_Emp debe ser un string con numeros positivos");
        }
        return true;
    }),

    body("celular_Emp")
    .notEmpty().withMessage("celular_Emp no debe estar vacio")
    .isString().withMessage("celular_Emp debe ser un string")
    .matches(/^[1-9][0-9]*$/).withMessage("celular_Emp solo puede contener una secuencia de caracteres numérricos")
    .isLength({ max: 16 }).withMessage("celular_Emp debe tener máximo 16 caracteres")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "string")) {
            throw new Error("celular_Emp debe ser un string con numeros positivos");
        }
        return true;
    }),

    body("correo_Emp")
    .notEmpty().withMessage("correo_Emp no debe estar vacio")
    .isString().withMessage("correo_Emp debe ser un string")
    .isEmail().withMessage("correo_Emp solo puede contener un correo electronico valido ")
    .isLength({ max: 150 }).withMessage("correo_Emp debe tener máximo 150 caracteres")
]