import dotenv from 'dotenv';
import {Router} from 'express'
import { conx } from '../Database/connection.js';
import { proxyHabitat } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';

dotenv.config()
const habitad = Router();
let db= await conx();
let collection = db.collection("habitat")
let autoincrement = db.collection("autoincrement");
async function  increment(coleccion){
    const sequenceDocument = await autoincrement.findOneAndUpdate(
        { _id: `${coleccion}Id` },
        { $inc: { sequence_value: 1 } },
        { returnDocument: "after" }
    );
    return sequenceDocument.value.sequence_value;
}

habitad.get("/",async ( req,res)=>{
    try {
        let funtion= await collection.find({}).sort({ _id : 1}).toArray();
        res.send(funtion)
    } catch (error) {
        res.send(error)
    }
    
})

habitad.post('/', proxyHabitat, async (req,res)=>{
    try{
        const id =  await increment("habitat");
        let data= {_id: id, ...req.body};
        await collection.insertOne(data);
        res.send(`se ha ingresado la data`)
    }catch(Error){ 
        res.status(400).send(Error);
    }
})

habitad.delete('/', proxyPValidateIds, async (req,res)=>{
    try {

        let data = req.body
        let id = data.id
        let funtion = await collection.deleteOne({"_id":id})
        funtion.deletedCount === 1
        ? res.status(200).send({ status: 200, message:`Documento con el id ${id} ha sido eliminado correctamente`})
        : res.status(404).send({ status: 404, message:`El documento con el id ${id} no ha sido encontrado`});

    } catch (error) {
        res.status(400).send(Error);
    }
})

habitad.put("/", proxyPValidateIds, proxyHabitat, async (req,res)=>{
    let actualizaciones ={...req.body};
    let filter = parseInt(req.query.id, 10)
    try{
        let working = await collection.updateOne({_id: filter},{$set: actualizaciones});
        if (working.modifiedCount > 0) {
            res.status(200).send({status: 200, message: `Documento con el id ${filter} se ha actualizado Correctamente`});
        } else {
            working.matchedCount === 1
            ? res.status(200).send({ status: 200, message:`No se realizaron cambios en el documento con el id ${filter}`})
            : res.status(404).send({ status: 404, message:`El documento con el id ${filter} no ha sido encontrado`});
        }  
    } catch (error) {
        res.send(error);
    }
})

export default habitad;