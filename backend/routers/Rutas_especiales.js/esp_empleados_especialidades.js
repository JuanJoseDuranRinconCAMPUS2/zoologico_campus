import {conx} from '../../Database/connection.js'
import {Router} from 'express'

let db= await conx();
const fEmpleados=Router();

fEmpleados.get('/',async(req,res)=>{

    try {
        let work = await db.getCollection("empleado").aggregate([
            {
                $lookup:{
                    from:("especialidad"),
                    localField:"id_especialidad",
                    foreignField:"id",
                    as:"Especialidades"
                }
            },
            {
                $project: {
                   _id: 0,
                }
            }
        ]);
        res.send(work)
    } catch (error) {
        res.send(error)
    }
})

export default fEmpleados;