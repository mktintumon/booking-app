import express from "express"
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } 
       from "../controllers/hotelController.js"

const router = express.Router()

// CRUD operations

// CREATE
router.post("/", createHotel)

// UPDATE
router.put("/:id",updateHotel)

// DELETE
router.delete("/:id",deleteHotel)

// GET ONE Hotel
router.get("/:id",getHotel)

// GET ALL Hotels
router.get("/",getAllHotel)


export default router