import  express from 'express';

import { SignJWT, jwtVerify } from 'jose';

const proxyAutorizacionTk = express();

proxyAutorizacionTk.use(async(req, res, next)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.status(400).send({status: 400, token: "Token no enviado"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.Jwt_Primate_Key)
        );
        req.data = jwtData;
        next();
    } catch (error) {
        console.log(error);
        res.status(498).send({status: 498, token: "Token caducado"});
    }
});
//permisos debe ser un numero entre 0 - 1 , el cual se usa para verificar el rol
// 0 significa que el endpoint no necesita permisos de rol ADMIN para ser usado
// 1 significa que el endpoint necesita permisos de rol ADMIN para ser usado
export function proxyEndpointVerify(permisos, endPointSelect, rol, version) {
    const proxyEndpointVerify = express();
    proxyEndpointVerify.use(async(req, res, next)=>{
        try {
            if(!req.rateLimit) return; 
            let {payload} = req.data;
            const { iat, exp, ...newPayload } = payload;
            let dataUsuario = newPayload;
            let dataValidator = { ...newPayload}
            dataValidator.endPoint = endPointSelect;
            
            let versiones = dataUsuario.versions;

            const versionSelect = versiones.indexOf(version);
            if (versionSelect < 0) {
                let mensaje = {status: 406, message: `No tienes acceso a esta version de la api, por favor intentelo nuevamente`};
                return res.status(406).send(mensaje);
            }
            if (permisos == 1) {
                dataValidator.rol = rol;
            }
            let Verify = JSON.stringify(dataUsuario) === JSON.stringify(dataValidator);
            (!Verify) ? res.status(406).send({status: 406, message: "No tienes autorizacion para acceder a esta peticion"}) : next(); 
        } catch (err) {
            res.status(err.status).send(err);
        }
    });

    return proxyEndpointVerify;
}



export {proxyAutorizacionTk};