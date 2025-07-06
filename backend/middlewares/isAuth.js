<<<<<<< HEAD
import jwt from "jsonwebtoken"
const isAuth=async (req,res,next)=>{
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(400).json({message:"token not found"})
        }
        const verifyToken=await jwt.verify(token,process.env.JWT_SECRET)
        req.userId=verifyToken.userId

        next()

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"is Auth error"})
    }
}

export default isAuth
=======
import jwt from "jsonwebtoken"
const isAuth=async (req,res,next)=>{
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(400).json({message:"token not found"})
        }
        const verifyToken=await jwt.verify(token,process.env.JWT_SECRET)
        req.userId=verifyToken.id

        next()

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"is Auth error"})
    }
}

export default isAuth
>>>>>>> af5ba10b220f3c421ab217f161701354cdb29c1f
