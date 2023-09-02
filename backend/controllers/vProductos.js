import { body } from "express-validator";

export const vPProductos = [

    body("nombre_Producto")
    .notEmpty().withMessage("nombre_Producto no debe estar vacio")
    .isString().withMessage("nombre_Producto debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("nombre_Producto solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 40 }).withMessage("nombre_Producto debe tener máximo 40 caracteres"),

    body("descripcion_Producto")
    .notEmpty().withMessage("descripcion_Producto no debe estar vacio")
    .isString().withMessage("descripcion_Producto debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("descripcion_Producto solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_Producto debe tener máximo 250 caracteres"),

    body("precio_Producto")
    .notEmpty().withMessage("precio_Producto no debe estar vacio")
    .isNumeric().withMessage("precio_Producto debe ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("precio_Producto debe ser un numero positivo");
        }
        return true;
    }),

    body("caducidad_Producto")
    .optional({ nullable: true })
    .notEmpty().withMessage("caducidad_Producto no debe estar vacio")
    .isString().withMessage("caducidad_Producto debe ser un string")
    .matches(/^(\d{4})-(\d{2})-(\d{2})$/).withMessage("caducidad_Producto debe tener el formato de fecha YYYY-MM-DD")
    .isLength({ max: 10 }).withMessage("caducidad_Producto debe tener máximo 10 caracteres"),
]