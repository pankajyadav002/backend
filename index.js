const express=require("express")
require('dotenv').config()

const port=process.env.PORT

const app=express()
const data={"name":"Pankaj"}

app.get("/",(req,res)=>{
    res.end("hello")
})

app.get("/data",(req,res)=>{
    res.json(data)
})



app.listen(port,()=>{
    console.log("server start")
})