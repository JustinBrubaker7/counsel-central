import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const MyCalendar = async (props) => {
  let myEventsList = [];

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        defaultDate={new Date()}
        defaultView="month"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
