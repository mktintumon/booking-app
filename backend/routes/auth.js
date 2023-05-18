import express from "express"
const router = express.Router()

router.get("/" , (req,res)=>{
    res.send("this is auth section.")
})

router.get("/register" , (req,res)=>{
    res.send("please register first")
})

export default router