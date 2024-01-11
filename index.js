import express from "express";
import { MongoClient } from "mongodb";
import 'dotenv/config'
import { DataRouter } from "./Routes/data.js";
import cors from "cors"

const app=express()
const port=8050
const mongourl=process.env.mongourl 

app.use(cors());

async function CreateConnection(){
    const Client = new MongoClient(mongourl)
   await Client.connect()
    console.log("mongodb has connected")
    return Client
}

export const client = await CreateConnection()

app.get('/' , (req,res)=>{
    res.send("hello")
})

app.use('/data',DataRouter)

app.listen(port,(()=>{console.log(`the server has started on ${port}`)}))