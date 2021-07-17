import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/auth-context";
import API from "../utils/API";
import TitleButtons from "../components/TitleButtons/TitleButtons";
import MyCalendar from "../components/Calendar/calendar";

const Calendar = () => {
  const authCtx = useContext(AuthContext);

  const [events, setEvents] = useState([]);

  async function fetchEventHandler(id, center_id) {
    const getData = await API.getEvents(id, center_id);
    const data = await getData.data;
    setEvents(data);
  }

  useEffect(() => {
    fetchEventHandler(authCtx.id, authCtx.center_id);
  }, [authCtx]);

  return (
    <div>
      <TitleButtons title={"Calendar"} />
      <MyCalendar eventList={events} />
    </div>
  );
};

export default Calendar;
