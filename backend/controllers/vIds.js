import { check, query } from "express-validator";

export const validatorIds = [
    check("id")
    .notEmpty().withMessage("id no debe estar vacio")
    .isNumeric().withMessage("id debe ser un numero")
    .matches(/^[1-9][0-9]*$/).withMessage("id solo puede ser un numero")
    .custom(value => {
        if (parseInt(value) <= 0 || !(typeof value == "number" || "string")) {
            throw new Error("id debe ser un número positivo");
        }
        return true;
    })
]