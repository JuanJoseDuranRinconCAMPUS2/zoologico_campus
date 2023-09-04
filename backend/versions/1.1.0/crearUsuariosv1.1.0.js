import { conx } from "../../Database/connection.js";
import errorcontroller from "../../Middlewares/ErroresMongo.js"

let db= await conx();
let usuario_Api = db.collection("usuario_Api");
let roles_Api = db.collection("roles_Api");

export const creacionUsuv110 = async (req, res) =>{
    if(!req.rateLimit) return;
    try {
        let result = await usuario_Api.insertOne(req.body);
        let rol = await roles_Api.findOne({ _id: req.body.codigo_Rol });
        res.status(200).send({status: 200, message: `El usuario: '${req.body.nombre}', con el rol de: '${rol.rol}', se ha creado correctamente`});
    } catch (error) {
        errorcontroller(error, res);
    }
}