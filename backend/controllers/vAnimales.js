import { body } from "express-validator";

export const vPAnimales = [
    body("nombre_Animales")
    .notEmpty().withMessage("nombre_Animales no debe estar vacio")
    .isString().withMessage("nombre_Animales debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("nombre_Animales solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 100 }).withMessage("nombre_Animales debe tener máximo 100 caracteres"),

    body("especie_Animales")
    .notEmpty().withMessage("especie_Animales no debe estar vacio")
    .isString().withMessage("especie_Animales debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]+$/).withMessage("especie_Animales solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 40 }).withMessage("especie_Animales debe tener máximo 40 caracteres"),

    body("dieta_Animales")
    .notEmpty().withMessage("dieta_Animales no debe estar vacio")
    .isString().withMessage("dieta_Animales debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("dieta_Animales solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 20 }).withMessage("dieta_Animales debe tener máximo 20 caracteres"),

    body("descripcion_Animales")
    .notEmpty().withMessage("descripcion_Animales no debe estar vacio")
    .isString().withMessage("descripcion_Animales debe ser un string")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ,.\s]+$/).withMessage("descripcion_Animales solo puede contener caracteres alfanuméricos, espacios y caracteres acentuados específicos ")
    .isLength({ max: 250 }).withMessage("descripcion_Animales debe tener máximo 250 caracteres"),

    body("id_habitat_Ani")
    .notEmpty().withMessage("id_habitat_Ani no debe estar vacio")
    .isNumeric().withMessage("id_habitat_Ani debe ser un numero")
    .matches(/^[1-9][0-9]*$/).withMessage("id_habitat_Ani solo puede ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number")) {
            throw new Error("id_habitat_Ani debe ser un número positivo");
        }
        return true;
    })
]