<<<<<<< HEAD
import mongoose from "mongoose"

const connectDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}

=======
import mongoose from "mongoose"

const connectDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}

>>>>>>> af5ba10b220f3c421ab217f161701354cdb29c1f
export default connectDb