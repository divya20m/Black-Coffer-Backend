import express from 'express'
import {getAlldata,getAllByEndYear,getAllBytopic,getAllBysector,getAllByregion,getAllBypestle,getAllBysource,getAllBycountry} from '../Function.js'

const router=express.Router()

router.get('/', async(req,res)=>{
    const result= await getAlldata()
    res.send(result)
})

router.get('/end_year/:end_year', async(req,res)=>{
    const {end_year}=req.params
    const result= await getAllByEndYear(end_year)
    res.send(result)
})

router.get('/topic/:topic', async(req,res)=>{
    const {topic}=req.params
    const result= await getAllBytopic(topic)
    res.send(result)
})

router.get('/sector/:sector', async(req,res)=>{
    const {sector}=req.params
    const result= await getAllBysector(sector)
    res.send(result)
})

router.get('/region/:region', async(req,res)=>{
    const {region}=req.params
    const result= await getAllByregion(region)
    res.send(result)
})

router.get('/pestle/:pestle', async(req,res)=>{
    const {pestle}=req.params
    const result= await getAllBypestle(pestle)
    res.send(result)
})

router.get('/source/:source', async(req,res)=>{
    const {source}=req.params
    const result= await getAllBysource(source)
    res.send(result)
})

router.get('/country/:country', async(req,res)=>{
    const {country}=req.params
    const result= await getAllBycountry(country)
    res.send(result)
})

export const DataRouter=router