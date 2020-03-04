import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CreateEvent from './CreateEvent.jsx';
import Table from 'react-bootstrap/Table';
import Event from './Event.jsx';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css"
import { Nav } from 'react-bootstrap';


class ListEvents extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      events: [],
      currentEvent: {},
      formClassName: 'm-fadeOut',
      startDate: new Date(),
      endDate: new Date(),
      msgValClass: 'val-invisible'
    }

    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadEvents() {
    var currentComponent = this;
    fetch('/api/event/1')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            events: result
          });
        },
        (error) => {
           console.error(error);
        }
      );
  }

  componentDidMount() {
    this.loadEvents();
  }

  onClickEdit (ev) {
   this.setState({formClassName: 'm-fadeIn'});
  }

  onClickDelete() {
    const data = {_id: this.state.currentEvent._id};
    fetch('/api/event/1',{
      method: 'DELETE',
      body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(data);
          this.loadEvents();
        },
        (error) => {
            console.error(error);
        }
    );

    this.loadEvents();

  }

  // Need to implement/complete editing method
  handleSubmit(e) {
    e.preventDefault();
    this.setState({formClassName: 'm-fadeOut'});
    this.setState({msgValClass: 'val-visible'});
    setTimeout(
      function() {
          this.setState({msgValClass: 'val-invisible'});
      }
      .bind(this),
      3000
  );

  }

  render() {

    return (
      <div>
      <div id="calendar">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Notes</th>
              <th>Start</th>
              <th>End</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.map((ev)=> {
            return (
              <Event
              event={ev}
              onClickEdit={() => {this.setState({currentEvent: ev}); this.onClickEdit();}}
              onClickDelete={() => {this.setState({currentEvent: ev}); this.onClickDelete();}}
              />
            );
            })}
          </tbody>
        </Table>
      </div>

      <div className={this.state.msgValClass}>
        <p>Event updated! </p>
      </div>

      <div className={this.state.formClassName}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control size="sm" type="text" placeholder={this.state.currentEvent.title} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder={this.state.currentEvent.notes} />
          </Form.Group>
          <div className="dates">
            <div>
              <label>Start</label>
              <div className="dt-picker">
                <DatePicker selected={this.state.startDate} onChange={date=> this.setState({startDate: date})}
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
                <DatePicker selected={this.state.endDate} onChange={date=> this.setState({endDate: date})}
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
            Update
          </Button>
        </Form>
      </div>
    </div>
    );
  }

}

export default ListEvents;