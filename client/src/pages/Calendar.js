import React from "react";
import Title from "../components/Title/Title";
import MyCalendar from "../components/Calendar/calendar";

const Calendar = () => {
  return (
    <div>
      <Title title={"Calendar"} />
      <MyCalendar />
    </div>
  );
};

export default Calendar;
