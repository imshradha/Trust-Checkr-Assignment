import express from "express";
import { addFlight, getFlights, filterFlights} from "../controllers/flight-controller.js";

const router = express.Router();

router.post('/flight', addFlight);
router.get('/allFlights', getFlights);
router.get('/getFilterFlights', filterFlights);

export default router;