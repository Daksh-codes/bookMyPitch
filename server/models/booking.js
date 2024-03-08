import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  turf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Turf",
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  date : {
    type : Date ,
    required : true
  },
  time: {
    type: String,
    required: true,
  },
  hours : {
    type: Number,
    required: true,
  }
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
