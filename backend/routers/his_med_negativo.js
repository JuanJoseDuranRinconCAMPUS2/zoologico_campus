import dotenv from 'dotenv';
import {Router} from 'express'
import { conx } from '../Database/connection.js';


dotenv.config()
const his_med_negativo = Router();
let db= await conx();
let collection = db.collection("his_med_negativo")

his_med_negativo.get("/",async ( req,res)=>{
    try {
    let funtion= await collection.find({}).toArray();
    res.send(funtion)
    } catch (error) {
        res.send(error)
    }
    
})

his_med_negativo.post('/',async (req,res)=>{
    try{
        let data=req.body;
        await collection.insertOne(data);
        res.send(`se ah ingresado la data`)
    }catch(Error){ 
        res.status(400).send(Error);
    }
})

his_med_negativo.delete('/', async (req,res)=>{
    try {

        let data = req.body
        let id =data._id
        let funtion = await collection.deleteOne({"_id":id},)
        res.send(funtion)

    } catch (error) {
        res.status(400).send(Error);
    }
})

his_med_negativo.put("/", async (req,res)=>{
    let actualizaciones ={...req.body,caducidad:new Date(req.body.caducidad)};
    let filter = parseInt(req.query.id, 10)
try{
    let working = await collection.updateOne({_id: filter},{$set: actualizaciones});
    res.send("se ah actualizado la data")  
} catch (error) {
    res.send(error);
}
})

export default his_med_negativo;