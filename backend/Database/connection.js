import dotnev from "dotenv";
import { MongoClient } from "mongodb";
dotnev.config();
export async function conx() {
    try {
        const uri = `mongodb+srv://${process.env.Atlas_User}:${process.env.Atlas_Password}@zoologicoproyect.nhnraeu.mongodb.net/${process.env.Atlas_DB}`;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        const client = await MongoClient.connect(uri, options);
        return client.db();
    } catch (error) {
        return {status: 500, message: error}
    }
}