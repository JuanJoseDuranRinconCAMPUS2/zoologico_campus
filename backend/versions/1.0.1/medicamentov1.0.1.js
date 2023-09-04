import { conx } from "../../Database/connection.js";

let db= await conx();
let collection = db.collection("medicamento")
let autoincrement = db.collection("autoincrement");

async function  increment(coleccion){
    const sequenceDocument = await autoincrement.findOneAndUpdate(
        { _id: `${coleccion}Id` },
        { $inc: { sequence_value: 1 } },
        { returnDocument: "after" }
    );
    return sequenceDocument.value.sequence_value;
}

export const getMedicamentoV101 = async ( req,res)=>{
    try {
        if(!req.rateLimit) return;
        let funtion = await collection.find({}).sort({ _id : 1}).toArray();
        res.send(funtion)
    } catch (error) {
        res.send(error)
    }
}

export const postMedicamentoV101 = async (req,res)=>{
    try{
        if(!req.rateLimit) return;
        const id =  await increment("medicamento");
        let data= {_id: id, ...req.body, caducidad : new Date(req.body.caducidad)};
        await collection.insertOne(data);
        res.status(200).send({status: 200, message: `Documento con el id ${id} se ha creado Correctamente`});
    }catch(Error){ 
        res.status(400).send(Error);
    }
}

export const putMedicamentoV101 = async (req,res)=>{
    let actualizaciones ={...req.body, caducidad : new Date(req.body.caducidad)};
    let filter = parseInt(req.query.id, 10)
    try{
        if(!req.rateLimit) return;
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
}

export const deleteMedicamentoV101 = async (req,res)=>{
    try {
        if(!req.rateLimit) return;
        let data = req.body
        let id = data.id
        let funtion = await collection.deleteOne({"_id":id})
        funtion.deletedCount === 1
        ? res.status(200).send({ status: 200, message:`Documento con el id ${id} ha sido eliminado correctamente`})
        : res.status(404).send({ status: 404, message:`El documento con el id ${id} no ha sido encontrado`});

    } catch (error) {
        res.status(400).send(Error);
    }
}