import {conx} from '../../Database/connection.js'
import {Router} from 'express'

let db= await conx();
const fAnimales=Router();
const collection = db.collection("animales");

fAnimales.get('/',async(req,res)=>{

    let filter=req.query.dieta;

    try {
        let work= await collection.find({"dieta":`${filter}`}).toArray();

        res.send(work)
    } catch (error) {
        res.send(error)
    }
})

export default fAnimales;