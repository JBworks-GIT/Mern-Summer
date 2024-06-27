const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.ynfgwko.mongodb.net/<dbName>?appName=Cluster0";
const mongoose = require('mongoose');


// const username = "root";
// const password = "root";

// const dbName = "LPU_MERN";

let dbUrl = uri.replace("<username>",process.env.DB_USERNAME);
dbUrl = dbUrl.replace("<password>",process.env.DB_PASSWORD);
dbUrl = dbUrl.replace("<dbName>",process.env.DB_NAME);











const client = new MongoClient(dbUrl);

const database = client.db("LPU_MERN");
const productCollection = database.collection("products");

module.exports = {
    productCollection,
}