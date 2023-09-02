import dotenv from 'dotenv';
import {Router} from 'express'
import { conx } from '../Database/connection.js';
import { proxyHisMedNeg } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';

dotenv.config()
const his_med_negativo = Router();
let db= await conx();
let collection = db.collection("his_Med_Negativo")
let autoincrement = db.collection("autoincrement");

async function  increment(coleccion){
    const sequenceDocument = await autoincrement.findOneAndUpdate(
        { _id: `${coleccion}Id` },
        { $inc: { sequence_value: 1 } },
        { returnDocument: "after" }
    );
    return sequenceDocument.value.sequence_value;
}

his_med_negativo.get("/",async ( req,res)=>{
    try {
    let funtion= await collection.find({}).sort({ _id : 1}).toArray();
    res.send(funtion)
    } catch (error) {
        res.send(error)
    }
    
})

his_med_negativo.post('/', proxyHisMedNeg, async (req,res)=>{
    try{
        const id =  await increment("his_med_negativo");
        let data= {_id: id, ...req.body};
        await collection.insertOne(data);
        res.send(`se ha ingresado la data`)
    }catch(Error){ 
        res.status(400).send(Error);
    }
})

his_med_negativo.delete('/', proxyPValidateIds, async (req,res)=>{
    try {

        let data = req.body
        let id =data.id
        let funtion = await collection.deleteOne({"_id":id})
        res.send(funtion)

    } catch (error) {
        res.status(400).send(Error);
    }
})

his_med_negativo.put("/", proxyPValidateIds, proxyHisMedNeg, async (req,res)=>{
    let actualizaciones ={...req.body};
    let filter = parseInt(req.query.id, 10)
    try{
        let working = await collection.updateOne({_id: filter},{$set: actualizaciones});
        res.send("se ha actualizado la data")  
    } catch (error) {
        res.send(error);
    }
})

export default his_med_negativo;