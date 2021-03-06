import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./style.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
let myEventsList = [];

export default function MyCalendar({ eventList }) {
  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={eventList}
        defaultDate={new Date()}
        defaultView="month"
        style={{ height: 700 }}
      />
    </div>
  );
}
