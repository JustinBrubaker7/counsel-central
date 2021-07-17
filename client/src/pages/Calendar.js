import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/auth-context";
import API from "../utils/API";
import Title from "../components/Title/Title";
import MyCalendar from "../components/Calendar/calendar";

const Calendar = () => {
  const authCtx = useContext(AuthContext);

  const [events, setEvents] = useState([]);

  async function fetchEventHandler(id) {
    const getData = await API.getEvents(id);
    const data = await getData.data;
    setEvents(data);
  }

  useEffect(() => {
    fetchEventHandler(authCtx.center_id);
  }, [authCtx]);

  return (
    <div>
      <Title title={"Calendar"} />
      <MyCalendar />
    </div>
  );
};

export default Calendar;
