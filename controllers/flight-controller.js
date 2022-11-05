import flightModel from '../models/flight-model.js';

export const addFlight = async (req, res) => {
    try {
        const requestBody = req.body;

        const { name, price, originCity, destinationCity, departureDate, departureTime } = requestBody;

        if (Object.values(requestBody).length == 0) {
            return res.status(400).send({ status: false, message: "Please provide Flight data" })
        }
        if (!name) {
            return res.status(400).send({ message: "Please enter flight name" })
        }
        if (!price) {
            return res.status(400).send({ message: "Please enter price" })
        }
        if (!originCity) {
            return res.status(400).send({ status: false, message: "Please enter origin city" });
        }
        if (!destinationCity) {
            return res.status(400).send({ message: "Please enter destination city" })
        }
        if (!departureDate) {
            return res.status(400).send({ message: "Please enter departure date" })
        }
        if (!departureTime) {
            return res.status(400).send({ message: "Please enter departure time" })
        }
        const newFlight = await flightModel.create(requestBody);
        return res.status(201).send({ message: "Flight added successfully", data: newFlight })

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

export const getFlights = async (req, res) => {
    try {
        const flights = await flightModel.find().select({ __v: 0 });
        return res.status(200).send({message:"All flights", data:flights});
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

export const filterFlights = async (req, res) => {
    try {
        const data = req.query;
        let condition = {};
        
        const { originCity, destinationCity, departureDate } = data;

        if(originCity) condition['originCity'] = originCity;
        if(destinationCity) condition['destinationCity'] = destinationCity;
        if(departureDate) condition['departureDate'] = departureDate;

        const flights = await flightModel.find(condition).select({ __v: 0 });
        return res.status(200).send({message:"All filter flights", data:flights});
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}


