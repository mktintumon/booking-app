import express from "express"
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel ,countByCity,countByType } 
       from "../controllers/hotelController.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

// CRUD operations

// CREATE
router.post("/",verifyAdmin,createHotel)

// UPDATE
router.put("/:id",verifyAdmin,updateHotel)

// DELETE
router.delete("/:id",verifyAdmin,deleteHotel)

// GET ONE Hotel
router.get("/find/:id",getHotel)

// GET ALL Hotels
router.get("/",getAllHotel)
router.get("/countByCity",countByCity)
router.get("/countByType",countByType)


export default router