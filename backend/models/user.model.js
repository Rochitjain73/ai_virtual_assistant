<<<<<<< HEAD
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    assistantName:{
        type:String
    },
     assistantImage:{
        type:String
    },
    history:[
        {type:String}
    ]

},{timestamps:true})

const User=mongoose.model("User",userSchema)
=======
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    assistantName:{
        type:String
    },
     assistantImage:{
        type:String
    },
    history:[
        {type:String}
    ]

},{timestamps:true})

const User=mongoose.model("User",userSchema)
>>>>>>> af5ba10b220f3c421ab217f161701354cdb29c1f
export default User