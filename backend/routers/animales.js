import dotenv from 'dotenv';
import {Router} from 'express'
import { conx } from '../Database/connection.js';


dotenv.config()
const animales = Router();
let db= await conx();
let collection = db.collection("animales")


animales.get("/",async ( req,res)=>{
    try {
    let funtion= await collection.find({}).toArray();
    res.send(funtion)
    } catch (error) {
        res.send(error)
    }
    
})

animales.post('/',async (req,res)=>{
    try{
        let data=req.body;
        await collection.insertOne(data);
        res.send(`se ah ingresado la data`)
    }catch(Error){ 
        res.status(400).send(Error);
    }
})

animales.delete('/', async (req,res)=>{
    try {
        let data = req.body
        let id =data._id
        let funtion = await collection.deleteOne({"_id":id},)
        res.send(funtion)
        funtion.deletedCount === 1
        ? res.status(200).send({ status: 200, message:`Documento con el id ${id} ha sido eliminado correctamente`})
        : res.status(404).send({ status: 404, message:`El documento con el id ${id} no ha sido encontrado`});

    } catch (error) {
        res.status(400).send(Error);
    }
})

animales.put("/", async (req,res)=>{
    let actualizaciones ={...req.body,caducidad:new Date(req.body.caducidad)};
    let filter = parseInt(req.query.id, 10)
try{
    let working = await collection.updateOne({_id: filter},{$set: actualizaciones});
    res.send("se ah actualizado la data")  
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

export default animales;