import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import DatePicker from 'react-datepicker';

const CreateEvent = ({currentUser}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  let [msgValClass, setMsgValClass] = useState('val-invisible');

  const addEvent = (event) => {
    console.log("this is what I'm saving", event);
    fetch('/api/event/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      clearForm();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

  const clearForm = () => {
    setMsgValClass('val-visible');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //const stDate = `${moment(startDate).format().slice(0, 16)}:00`;
    //const endDate = `${moment(endDate).format().slice(0, 16)}:00`;

    let event = {
      userId: currentUser.id,
      title: e.target[0].value,
      notes: e.target[1].value,
      start: startDate,
      end: endDate,
    };

    addEvent(event);
  }

  return (
    <div className="create-event" >
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Name your event" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Any comments?" />
        </Form.Group>
        <div className="dates">
          <div>
            <label>Start</label>
            <div className="dt-picker">
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="yyyy/MM/dd h:mm aa"
              />
            </div>
          </div>
          <div>
            <label>End</label>
            <div className="dt-picker">
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="yyyy/MM/dd h:mm aa"
              />
              </div>
          </div>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className={msgValClass}>
        <p>Event created! </p>
      </div>
    </div>
  );
}

export default CreateEvent;