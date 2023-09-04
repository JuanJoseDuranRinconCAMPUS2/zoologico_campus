import rateLimit from "express-rate-limit";

export let getLimit = () => {
    return rateLimit({
        windowMs: 15 * 1000,
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>1){
                res.status(413).send({
                    status: 413,
                    message: "no se permiten datos de entrada"
                });
                return true;
            }
        },
        message: (req, res)=>{
            res.status(429).send({
                status: 429,
                message: 'se han realizado demasiadas consultas vuelve a intentarlo en 15 segundos'
            })
        }
    })
}

export let postAndPutLimit = (num) => {
    return rateLimit({
        windowMs: 30 * 1000,
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>num){
                res.status(413).send({
                    status: 413,
                    message: "Haz superado rango de longitud de la data en este endpoint"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                message: `se han realizado demasiadas consultas vuelve a intentarlo en 30 segundos`
            })
        }
    })
}

export let deleteLimit = () => {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>40){
                res.status(413).send({
                    status: 413,
                    message: "Haz superado rango de longitud de la data en este endpoint"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'se han realizado demasiadas consultas vuelve a intentarlo en un minuto'
            })
        }
    })
}



