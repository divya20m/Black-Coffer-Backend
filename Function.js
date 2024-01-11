import {client} from "./index.js";


export async function getAlldata(){
    return client.db("BlackCoffer").collection("data").find().toArray()
}

export async function getAllByEndYear(end_year){
    return client.db("BlackCoffer").collection("data").find({end_year:end_year})
}

export async function getAllBytopic(topic){
    return client.db("BlackCoffer").collection("data").find({topic:topic}).toArray()
}

export async function getAllBysector(sector){
    return client.db("BlackCoffer").collection("data").find({sector}).toArray()
}

export async function getAllByregion(region){
    return client.db("BlackCoffer").collection("data").find({region}).toArray()
}

export async function getAllBypestle(pestle){
    return client.db("BlackCoffer").collection("data").find({pestle}).toArray()
}

export async function getAllBysource(source){
    return client.db("BlackCoffer").collection("data").find({source}).toArray()
}

export async function getAllBycountry(country){
    return client.db("BlackCoffer").collection("data").find({country}).toArray()
}
