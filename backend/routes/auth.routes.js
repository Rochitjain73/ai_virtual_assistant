<<<<<<< HEAD
import express from "express"
import { Login, logOut, signUp } from "../controllers/auth.controllers.js"

const authRouter=express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/signin",Login)
authRouter.get("/logout",logOut)
=======
import express from "express"
import { Login, logOut, signUp } from "../controllers/auth.controllers.js"

const authRouter=express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/signin",Login)
authRouter.get("/logout",logOut)
>>>>>>> af5ba10b220f3c421ab217f161701354cdb29c1f
export default authRouter