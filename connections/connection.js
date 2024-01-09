const mongoose=require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/chai').then(()=>console.log("mongodb connected"))
.catch((error)=>console.log(error))


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    age:{
        type:Number
    }
})


const user=mongoose.model("user",userSchema)


module.exports=user;