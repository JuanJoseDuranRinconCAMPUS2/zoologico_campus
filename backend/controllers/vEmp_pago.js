import { body } from "express-validator";

export const vPempPago = [

    body("fecha_EmpPago")
    .notEmpty().withMessage("fecha_EmpPago no debe estar vacio")
    .isString().withMessage("fecha_EmpPago debe ser un string")
    .matches(/^(\d{4})-(\d{2})-(\d{2})$/).withMessage("fecha_EmpPago debe tener el formato de fecha YYYY-MM-DD")
    .isLength({ max: 10 }).withMessage("fecha_EmpPago debe tener máximo 10 caracteres"),

    body("cantidad_EmpPago")
    .notEmpty().withMessage("cantidad_EmpPago no debe estar vacio")
    .isNumeric().withMessage("cantidad_EmpPago debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("cantidad_EmpPago debe ser un string con numeros positivos");
        }
        return true;
    }),

    body("descripcion_EmpPago")
    .notEmpty().withMessage("descripcion_EmpPago no debe estar vacio")
    .isString().withMessage("descripcion_EmpPago debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("descripcion_EmpPago solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_EmpPago debe tener máximo 250 caracteres"),
    
    body("id_Emp_EmpPago")
    .notEmpty().withMessage("id_Emp_EmpPago no debe estar vacio")
    .isNumeric().withMessage("id_Emp_EmpPago debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Emp_EmpPago debe ser un string con numeros positivos");
        }
        return true;
    })
]