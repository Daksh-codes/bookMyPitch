import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const blockedDates = [
    new Date("2024-03-10"),
    new Date("2024-03-15"),
    new Date("2024-03-20"),
  ]; // Add your blocked dates here

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // Block weekends
  };

  const isBlocked = (date) => {
    return !blockedDates.some(
      (blockedDate) =>
        new Date(blockedDate).toDateString() === date.toDateString()
    );
  };

  return (
    <DatePicker
    
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      //filterDate={isWeekday}
      //includeDates={blockedDates}
      //excludeDates={blockedDates.filter(date => !isBlocked(date))}
      placeholderText="Select a date"

      isClearable
        className="rounded-sm p-2"
        withPortal
    />
  );
};

export default MyDatePicker;
