import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = (slotInfo) => {
    const title = prompt('New Event name');
    if (title) {
      const newEvent = {
        title,
        start: slotInfo.start,
        end: slotInfo.end,
        allDay: slotInfo.action === 'doubleClick'
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default MyCalendar;
