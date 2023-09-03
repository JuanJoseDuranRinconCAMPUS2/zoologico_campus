import rateLimit from "express-rate-limit";

export let getLimit = () => {
    return rateLimit({
        windowMs: 10 * 1000,
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{
            res.status(429).send({
                message: 'se han realizado demasiadas consultas vuelve a intentarlo en unos segundos'
            })
        }
    })
}

export let postLimit = () => {
    return rateLimit({
        windowMs: 10 * 1000,
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{
            res.status(429).send({
                message: `se han realizado demasiadas consultas vuelve a intentarlo en unos segundos`
            })
        }
    })
}

export let deleteLimit = () => {
    return rateLimit({
        windowMs: 10 * 1000,
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{
            res.status(429).send({
                message: 'se han realizado demasiadas consultas vuelve a intentarlo en unos segundos'
            })
        }
    })
}



