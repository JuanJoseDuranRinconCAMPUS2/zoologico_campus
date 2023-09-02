import { body } from "express-validator";

export const vPInventario = [

    body("cantidad_Inv")
    .notEmpty().withMessage("cantidad_Inv no debe estar vacio")
    .isNumeric().withMessage("cantidad_Inv debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("cantidad_Inv debe ser un numero positivo");
        }
        return true;
    }),

    body("fc_Ing_Inv")
    .notEmpty().withMessage("fc_Ing_Inv no debe estar vacio")
    .isString().withMessage("fc_Ing_Inv debe ser un string")
    .matches(/^(\d{4})-(\d{2})-(\d{2})$/).withMessage("fc_Ing_Inv debe tener el formato de fecha YYYY-MM-DD")
    .isLength({ max: 10 }).withMessage("fc_Ing_Inv debe tener máximo 10 caracteres"),

    body("descripcion_Inv")
    .notEmpty().withMessage("descripcion_Inv no debe estar vacio")
    .isString().withMessage("descripcion_Inv debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("descripcion_Inv solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_Inv debe tener máximo 250 caracteres"),

    body("id_Producto_Inv")
    .notEmpty().withMessage("id_Producto_Inv no debe estar vacio")
    .isNumeric().withMessage("id_Producto_Inv debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_Producto_Inv debe ser un numero positivo");
        }
        return true;
    })
]