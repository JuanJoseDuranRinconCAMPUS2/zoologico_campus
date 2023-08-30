import dotenv from 'dotenv';
import {Router} from 'express'
import { conx } from '../Database/connection.js';


dotenv.config()
const his_alimento = Router();
let db= await conx();
let collection = db.collection("his_Alimento");
let autoincrement = db.collection("autoincrement");

async function  increment(coleccion){
    const sequenceDocument = await autoincrement.findOneAndUpdate(
        { _id: `${coleccion}Id` },
        { $inc: { sequence_value: 1 } },
        { returnDocument: "after" }
    );
    return sequenceDocument.value.sequence_value;
}

his_alimento.get("/",async ( req,res)=>{
    try {
        let funtion= await collection.find({}).sort({ _id : 1}).toArray();
        res.send(funtion)
    } catch (error) {
        res.send(error)
    }
    
})

his_alimento.post('/',async (req,res)=>{
    try{
        const id =  await increment("his_alimento");
        let data= {_id: id, ...req.body, fecha_Suministro : new Date(req.body.fecha_Suministro)};
        await collection.insertOne(data);
        res.send(`se ha ingresado la data`)
    }catch(error){ 
        res.status(400).send(error);
    }
})

his_alimento.delete('/', async (req,res)=>{
    try {
        let data = req.body
        let id =data._id
        let funtion = await collection.deleteOne({"_id":id})
        res.send(funtion)

    } catch (error) {
        res.status(400).send(Error);
    }
})

his_alimento.put("/", async (req,res)=>{
    let actualizaciones ={...req.body, fecha_Suministro:new Date(req.body.fecha_Suministro)};
    let filter = parseInt(req.query.id, 10)
    try{
        let working = await collection.updateOne({_id: filter},{$set: actualizaciones});
        res.send("se ha actualizado la data")  
    } catch (error) {
        res.send(error);
    }
})

export default his_alimento;