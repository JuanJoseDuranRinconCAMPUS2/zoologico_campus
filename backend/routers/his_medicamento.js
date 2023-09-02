import dotenv from 'dotenv';
import {Router} from 'express'
import { conx } from '../Database/connection.js';
import { proxyHisMed } from '../Middlewares/proxyPEndpoints.js';

dotenv.config()
const his_medicamento = Router();
let db= await conx();
let collection = db.collection("his_Medicamento")
let autoincrement = db.collection("autoincrement");

async function  increment(coleccion){
    const sequenceDocument = await autoincrement.findOneAndUpdate(
        { _id: `${coleccion}Id` },
        { $inc: { sequence_value: 1 } },
        { returnDocument: "after" }
    );
    return sequenceDocument.value.sequence_value;
}

his_medicamento.get("/",async ( req,res)=>{
    try {
    let funtion= await collection.find({}).sort({ _id : 1}).toArray();
    res.send(funtion)
    } catch (error) {
        res.send(error)
    }
    
})

his_medicamento.post('/', proxyHisMed, async (req,res)=>{
    try{
        const id =  await increment("his_medicamento");
        let data= {_id: id, ...req.body, fecha_Suministro : new Date(req.body.fecha_Suministro)};
        await collection.insertOne(data);
        res.send(`se ha ingresado la data`)
    }catch(Error){ 
        res.status(400).send(Error);
    }
})

his_medicamento.delete('/', async (req,res)=>{
    try {
        let data = req.body
        let id =data._id
        let funtion = await collection.deleteOne({"_id":id})
        res.send(funtion)

    } catch (error) {
        res.status(400).send(Error);
    }
})

his_medicamento.put("/", proxyHisMed, async (req,res)=>{
    let actualizaciones ={...req.body, fecha_Suministro : new Date(req.body.fecha_Suministro)};
    let filter = parseInt(req.query.id, 10)
    try{
        let working = await collection.updateOne({_id: filter},{$set: actualizaciones});
        res.send("se ha actualizado la data")  
    } catch (error) {
        res.send(error);
    }
})

export default his_medicamento;