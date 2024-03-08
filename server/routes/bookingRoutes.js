import express from 'express'
import { createBooking  , checkAvailability , bookingById , checkAvailabilityById} from '../controllers/bookingController.js';
import Auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/create" , createBooking)
router.post("/checkAvailability" , checkAvailability)
router.get("/getBookings/:turfId" , bookingById)
router.get("/getBlockedDates/:turfId" ,checkAvailabilityById )

export default router 