import { conx } from "../../Database/connection.js";
import { SignJWT } from 'jose';

let db= await conx();
let tokens_Api = db.collection("tokens_Api");
let usuario = db.collection("usuario_Api");

export const ingresarUsuv110 = async (req, res) =>{
    if(!req.rateLimit) return;
    try {
        let {nombre, endPoint, rol} = req.body
        let funtion = await usuario.find({"nombre" : req.body.nombre}).toArray()
        let versions = funtion[0].versiones;
        let data = { nombre, endPoint , versions, rol}
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, data));
        const jwt = await jwtconstructor
        .setProtectedHeader({alg:"HS256", typ: "JWT"})
        .setIssuedAt()
        .setExpirationTime("30m")
        .sign(encoder.encode(process.env.Jwt_Primate_Key));
        req.data = jwt;
        let id_usuario_Api = req.usuarioID 
        let tokens = {id_usuario_Api}
        tokens.token = jwt
        let result = await tokens_Api.insertOne(tokens)
        res.status(201).send({status: 201, message: jwt, instructions: "En el header de la peticion pon el header 'Authorization' y luego pon esta llave como valor"});
  } catch (error) {
      res.status(404).send({status: 404, message: "Error al crear el Token"});
  }

}