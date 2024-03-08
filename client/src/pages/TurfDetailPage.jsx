import UserNav from "../components/UserNav";
import turfImg from "../assets/turfImage.png";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TurfDetailPage() {
  const [date, setDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const [bookings, setBookings] = useState();
  const [bookedDates, setBookedDates] = useState([]);
  const [hours, setHours] = useState(1);
  const [data, setData] = useState();
  const { turfId } = useParams();
  const [selectedTime, setSelectedTime] = useState(null);
  console.log(turfId);
  const blockedDates = [
    new Date("2024-03-10"),
    new Date("2024-03-18"),
    new Date("2024-03-20"),
  ];

  useEffect(() => {
    const getTurf = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`http://localhost:5000/api/turf/${turfId}`);
        console.log(res);
        setIsLoading(false);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getBookedDates = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/booking/getBlockedDates/${turfId}`
        );
        console.log(res);
        const dates = res.data.map((date) => new Date(date)); // Ensure correct date format from API
        const formattedDates = dates.map((date) => {
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month because it's zero-based
          const day = date.getDate().toString().padStart(2, "0");
          return `${year}-${month}-${day}`;
        });
        console.log(formattedDates);
        setBookedDates(formattedDates);
      } catch (error) {
        console.log(error);
      }
    };

    const getBookings = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/booking/getBookings/${turfId}`
        );
        console.log(res);
        setBookings(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTurf();
    getBookedDates();
    getBookings();
  }, []);


  const excludedTime = bookings.map(booking => {
    // console.log(date , booking.date)
    if(new Date(booking.date) === date ){
        console.log(date , new Date(booking.date))
    }
  })

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserNav />
      <div className="p-24 flex gap-20 ">
        <img src={turfImg} alt="" className="w-[45vw] object-contain" />
        <div className="text-xl w-[30vw]  flex flex-col gap-3">
          <h2 className="text-5xl font-semibold">{data.turfName}</h2>
          <p className="text-neutral-500">{data.desc}</p>
          <h5 className="text-xl font-[500] text-neutral-700">
            Price : {data.price} per hour{" "}
          </h5>
          <h5 className="text-xl font-[500] text-neutral-700 ">
            Timmings: {data.openTime} - {data.closeTime}
          </h5>
          <h5 className="text-xl font-[500] text-neutral-700 ">
            Address : {data.address}
          </h5>
          <div className="p-4 bg-accent items-start text-white shadow-2xl flex flex-col gap-4  w-full">
            <h3>Book Turf</h3>
            <div className="flex items-center gap-6">
              <label>Date : </label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                minDate={new Date()}
                placeholderText="Select a date"
                isClearable
                className="rounded-sm p-2 text-black"
                withPortal
                excludeDates={bookedDates.map((date) => new Date(date))}
                //timeFormat="HH:mm"
                //timeIntervals={60}
                //showTimeSelect
                dateFormat="yyyy-MM-dd "
              />
            </div>
            <div className="flex items-center gap-6">
              <label>Time : </label>
              <DatePicker
                selected={selectedTime}
                onChange={(time) => setSelectedTime(time)}
                placeholderText="Select a time"
                isClearable
                className="rounded-sm p-2 text-black"
                timeFormat="HH:mm"
                timeIntervals={60}
                showTimeSelect
                showTimeSelectOnly
                dateFormat="HH:MM "
              />
            </div>

            <div className="flex items-center gap-5">
              <label htmlFor="hours">Hours: </label>
              <input
                type="number"
                id="hours"
                min={1}
                className="p-2 w-[76%] text-black"
                onChange={(e) => setHours(e.target.value)}
                value={hours}
              />
            </div>
            <button className="bg-[#FCA311]  text-black p-3 px-2 w-[90%] ">
              Book Turf
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TurfDetailPage;
