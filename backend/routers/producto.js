import dotenv from 'dotenv';
import {Router} from 'express'
import { conx } from '../Database/connection.js';
import { proxyProducto } from '../Middlewares/proxyPEndpoints.js';
import { proxyPValidateIds } from '../Middlewares/proxyIdsV.js';

dotenv.config()
const producto = Router();
let db= await conx();
let collection = db.collection("producto")
let autoincrement = db.collection("autoincrement");

async function  increment(coleccion){
    const sequenceDocument = await autoincrement.findOneAndUpdate(
        { _id: `${coleccion}Id` },
        { $inc: { sequence_value: 1 } },
        { returnDocument: "after" }
    );
    return sequenceDocument.value.sequence_value;
}

producto.get("/",async ( req,res)=>{
    try {
        let funtion= await collection.find({}).sort({ _id : 1}).toArray();
        res.send(funtion)
    } catch (error) {
        res.send(error)
    }
    
})

producto.post('/', proxyProducto, async (req,res)=>{
    try{
        const id =  await increment("producto");
        let data= {_id: id, ...req.body, caducidad : (req.body.caducidad == null) ? null : new Date(req.body.caducidad)};
        await collection.insertOne(data);
        res.send(`se ha ingresado la data`)
    }catch(Error){ 
        res.status(400).send(Error);
    }
})

producto.delete('/', proxyPValidateIds, async (req,res)=>{
    try {
        let data = req.body
        let id =data.id
        let funtion = await collection.deleteOne({"_id":id})
        res.send(funtion)

    } catch (error) {
        res.status(400).send(Error);
    }
})

producto.put("/", proxyPValidateIds, proxyProducto, async (req,res)=>{
    let actualizaciones ={...req.body, caducidad : (req.body.caducidad == null) ? null : new Date(req.body.caducidad)};
    let filter = parseInt(req.query.id, 10)
try{
    let working = await collection.updateOne({_id: filter},{$set: actualizaciones});
    res.send("se ha actualizado la data")  
} catch (error) {
    res.send(error);
}
})

export default producto;