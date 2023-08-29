import dotenv from 'dotenv';
import {Router} from 'express'
import { conx } from '../Database/connection.js';

dotenv.config()
const inventario = Router();
let db= await conx();
let collection = db.collection("inventario")

inventario.get("/",async ( req,res)=>{
    try {

    let funtion= await collection.find({}).toArray();
    res.send(funtion)
    } catch (error) {
        res.send(error)
    }
    
})

inventario.post('/',async (req,res)=>{
    try{
        let data=req.body;

        await collection.insertOne(data);
        res.send(`se ah ingresado la data`)
    }catch(Error){ 
        res.status(400).send(Error);
    }
})

inventario.delete('/', async (req,res)=>{
    try {
        let data = req.body
        let id =data._id
        let funtion = await collection.deleteOne({"_id":id},)
        res.send(funtion)

    } catch (error) {
    }
})

inventario.put("/", async (req,res)=>{
    let actualizaciones ={...req.body,caducidad:new Date(req.body.caducidad)};
    let filter = parseInt(req.query.id, 10)
try{
    let working = await collection.updateOne({_id: filter},{$set: actualizaciones});
    res.send("se ah actualizado la data")  
} catch (error) {
    res.send(error);
}
})

export default inventario;