import Booking from "../models/booking.js";
import Turf from "../models/turf.js";

export const createBooking = async (req, res) => {
  try {
    const data = req.body;
    // const bookings = await Booking.find({
    //   turf: data.turf,
    //   date: data.date,
    //   time: data.time,
    // });
    // if (bookings) {
    //   return res.status(403).send("Booking already exists");
    // }
    const newBooking = new Booking(data);
    await newBooking.save();

    return res
      .status(201)
      .send({ message: "Booking created successfully", newBooking });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
export const checkAvailability = async (req, res) => {
  try {
    const { name, date, minPrice, maxPrice, location } = req.body;
    console.log({ name, date, minPrice, maxPrice, location });

    const query = {};
    if (name) query.turfName = name;
    if (location) query.city = location;

    let turfs = await Turf.find(query);

    if (minPrice !== undefined) {
      turfs = turfs.filter((turf) => turf.price >= minPrice);
    }
    if (maxPrice !== undefined) {
      turfs = turfs.filter((turf) => turf.price <= maxPrice);
    }

    if (date) {
      turfs = turfs.filter((turf) => !turf.isBooked);
    }

    return res.status(200).json(turfs);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const bookingById = async (req, res) => {
  try {
    const { turfId } = req.params;
    const bookings = await Booking.find({ turf: turfId });
    return res.status(200).send(bookings);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
export const checkAvailabilityById = async (req, res) => {
  try {
    const { turfId } = req.params;

    // Find all bookings for the given turf
    const bookingData = await Booking.find({ turf: turfId });

    // Extract distinct dates from booking data
    const distinctDates = [
      ...new Set(bookingData.map((booking) => booking.date)),
    ];

    // Get the turf details
    const turf = await Turf.findById(turfId);
    const openTime = parseInt(turf.openTime);
    const closeTime = parseInt(turf.closeTime);
    const totalTime = closeTime - openTime;

    // Initialize an array to store blocked dates
    const blockedDates = [];

    // Iterate over distinct dates
    distinctDates.forEach((date) => {
      // Calculate total booking hours for the date
      const totalBookingHours = bookingData
        .filter((booking) => booking.date === date)
        .reduce((total, booking) => total + booking.hours, 0);

      // Calculate remaining available hours
      const remainingTime = totalTime - totalBookingHours;

      // If remaining time is less than or equal to zero, add date to blocked dates
      if (remainingTime <= 0) {
        blockedDates.push(new Date(date));
      }
    });

    // Return the blocked dates
    res.status(200).send(blockedDates);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
