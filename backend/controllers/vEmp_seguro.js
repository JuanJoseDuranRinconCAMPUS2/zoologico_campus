import { body } from "express-validator";

export const vPEmpSeguro = [

    body("estado_EmpSeguro")
    .notEmpty().withMessage("estado_EmpSeguro no debe estar vacio")
    .isString().withMessage("estado_EmpSeguro debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("estado_EmpSeguro solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 50 }).withMessage("estado_EmpSeguro debe tener máximo 50 caracteres"),

    body("tipo_EmpSeguro")
    .notEmpty().withMessage("tipo_EmpSeguro no debe estar vacio")
    .isString().withMessage("tipo_EmpSeguro debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("tipo_EmpSeguro solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 50 }).withMessage("tipo_EmpSeguro debe tener máximo 50 caracteres"),

    body("precio_EmpSeguro")
    .notEmpty().withMessage("precio_EmpSeguro no debe estar vacio")
    .isNumeric().withMessage("precio_EmpSeguro debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("precio_EmpSeguro debe ser un numero positivo");
        }
        return true;
    }),

    body("fc_Expe_EmpSeguro")
    .notEmpty().withMessage("fc_Expe_EmpSeguro no debe estar vacio")
    .isString().withMessage("fc_Expe_EmpSeguro debe ser un string")
    .matches(/^(\d{4})-(\d{2})-(\d{2})$/).withMessage("fc_Expe_EmpSeguro debe tener el formato de fecha YYYY-MM-DD")
    .isLength({ max: 10 }).withMessage("fc_Expe_EmpSeguro debe tener máximo 10 caracteres"),

    body("fc_Expi_EmpSeguro")
    .notEmpty().withMessage("fc_Expi_EmpSeguro no debe estar vacio")
    .isString().withMessage("fc_Expi_EmpSeguro debe ser un string")
    .matches(/^(\d{4})-(\d{2})-(\d{2})$/).withMessage("fc_Expi_EmpSeguro debe tener el formato de fecha YYYY-MM-DD")
    .isLength({ max: 10 }).withMessage("fc_Expi_EmpSeguro debe tener máximo 10 caracteres"),

    body("id_Emp_EmpSeguro")
    .notEmpty().withMessage("id_Emp_EmpSeguro no debe estar vacio")
    .isNumeric().withMessage("id_Emp_EmpSeguro debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Emp_EmpSeguro debe ser un numero positivo");
        }
        return true;
    })
]