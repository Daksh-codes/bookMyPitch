import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes.js"
import turfRouter from "./routes/turfRoutes.js"
import bookingRouter from "./routes/bookingRoutes.js"

dotenv.config();
const app = express();
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
 
app.use(cors({
  origin :true ,    
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//.....................//
// Multer Configration //
//.....................//



//.........//
// Routers //
//.........//
// app.get('/' , (req , res) => {
//   res.json("It works Hahahhaha")
// })
app.use('/api/users' , userRouter )
app.use('/api/turf' , turfRouter)
app.use('/api/booking' ,bookingRouter )
app.use("/uploads", express.static("uploads"));




const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('mongoDB working')
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((error) => console.log(`${error.message} did not connect`));