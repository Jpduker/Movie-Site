// Database code 
require('dotenv').config();
import app from './server.js'
import mongobd from "mongodb"

const MongoClient = mongobd.MongoClient
const mongo_username = process.env.MONGO_USERNAME
const mongo_password = process.env.MONGO_PASSWORD
const uri =`mongodb+srv:// ${mongo_username}: ${mongo_password}@cluster0.hakwgy7.mongodb.net/?retryWrites=true&w=majority`


const port =8000

MongoClient.connect(
    uri, {
        maxPoolSize:50,
        wtimeoutMS: 2500,
        useNewUrlParser : true
    })
    .catch(err => {
    console.error(err.stack)
    process.exit(1)
    
    }) 
    .then(async client =>{
        app.listen(port, ()=> {
            console.log(`listening on port ${port}`)
        })
    })