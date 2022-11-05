import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
    name: String,
    price: Number,
    originCity: String,
    destinationCity: String,
    departureDate: String,
    departureTime: String
})

const flight = mongoose.model('Flight', flightSchema)

export default flight;