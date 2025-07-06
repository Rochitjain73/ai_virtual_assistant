<<<<<<< HEAD
import jwt from "jsonwebtoken"
const genToken=async (userId)=>{
    try {
        const token = await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"10d"})
        return token
    } catch (error) {
        console.log(error)
    }
}

=======
import jwt from "jsonwebtoken"
const genToken=async (userId)=>{
    try {
        const token = await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"10d"})
        return token
    } catch (error) {
        console.log(error)
    }
}

>>>>>>> af5ba10b220f3c421ab217f161701354cdb29c1f
export default genToken