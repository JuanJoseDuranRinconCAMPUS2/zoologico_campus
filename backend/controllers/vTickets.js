import { body } from "express-validator";

export const vPTickets = [

    body("tipo_Ticket")
    .notEmpty().withMessage("tipo_Ticket no debe estar vacio")
    .isString().withMessage("tipo_Ticket debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("tipo_Ticket solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 20 }).withMessage("tipo_Ticket debe tener máximo 20 caracteres"),

    body("precio_Ticket")
    .notEmpty().withMessage("precio_Ticket no debe estar vacio")
    .isNumeric().withMessage("precio_Ticket debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("precio_Ticket debe ser un numero positivo");
        }
        return true;
    }),
]