const express=require("express")
require('dotenv').config()

const port=process.env.PORT

const app=express()


app.get("/",(req,res)=>{
    res.end("hello")
})


app.listen(port,()=>{
    console.log("server start")
})