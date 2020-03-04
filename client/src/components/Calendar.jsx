import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import Link from 'react-router-dom';

const Calendar = ({currentView, events}) => {

  const eventClick = (e) => {
    <Link to="/listEvents"/>
  }

  return (
    <div className="calendar">
      <FullCalendar
        defaultView={currentView}
        eventColor={'#5bc987'}
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]}
        events={events}
          eventClick={eventClick}
          />
    </div>
  );
}

export default Calendar;