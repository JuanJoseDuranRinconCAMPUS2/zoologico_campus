import { body } from "express-validator";

export const vPVentas = [

    body("id_Cliente_Venta")
    .notEmpty().withMessage("id_Cliente_Venta no debe estar vacio")
    .isNumeric().withMessage("id_Cliente_Venta debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Cliente_Venta debe ser un numero positivo");
        }
        return true;
    }),

    body("id_Ticket_Venta")
    .notEmpty().withMessage("id_Ticket_Venta no debe estar vacio")
    .isNumeric().withMessage("id_Ticket_Venta debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Ticket_Venta debe ser un numero positivo");
        }
        return true;
    }),

    body("descripcion_Venta")
    .notEmpty().withMessage("descripcion_Venta no debe estar vacio")
    .isString().withMessage("descripcion_Venta debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("descripcion_Venta solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_Venta debe tener máximo 250 caracteres"),

    body("valor_Venta")
    .notEmpty().withMessage("valor_Venta no debe estar vacio")
    .isNumeric().withMessage("valor_Venta debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("valor_Venta debe ser un numero positivo");
        }
        return true;
    })
]