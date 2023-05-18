import Hotel from "../models/hotel.js"


export const createHotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error)
    }
}

export const updateHotel = async(req,res,next)=>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
                            req.params.id, 
                            {$set:req.body},
                            {new:true} // it will return updated one
        )
        res.status(200).json(updatedHotel)
    } catch (error) {
        next(error)
    }
}

export const deleteHotel = async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted successfully")
    } catch (error) {
        next(error)
    }
}

export const getHotel = async(req,res,next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}

export const getAllHotel = async(req,res,next)=>{
    try {
        const hotels = await Hotel.find(req.params.id)
        res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}