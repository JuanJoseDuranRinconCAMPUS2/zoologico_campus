import {conx} from '../../Database/connection.js'
import {Router} from 'express'

let db= await conx();
const fMedicina=Router();

fMedicina.get('/',async(req,res)=>{

    try {
        let work = await db.getCollection("his_med_negativo").aggregate([
            {
                $lookup:{
                    from:("animales"),
                    localField:"id_animal",
                    foreignField:"id",
                    as:"Afectados"
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

export default fMedicina;