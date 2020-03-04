import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import Sidebar from './Sidebar.jsx';
import Calendar from './Calendar.jsx';
import CreateEvent from './CreateEvent.jsx';
import ListEvents from './ListEvents.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css"
import '../styles/main.scss'

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      currentUser: {},
      events: [],
    }

  }

  componentDidMount() {
    fetch('/api/user/1')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            currentUser: result
          });
        },
        (error) => {
           console.error(error);
        }
      );

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

  //Need to change hardcoded currentUser
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
          <Route path='/' exact>
                <Sidebar id="sidebar"/>
                <div className="main">
                  <div className="greeting">
                     <div>
                       <img src="https://img.icons8.com/cotton/64/000000/gender-neutral-user--v1.png"/>
                       <span>  Hello,</span><span className="userName"> Priscila</span>
                    </div>
                  </div>
                  <Calendar events={this.state.events} currentView={'timeGridDay'}/>
                </div>
            </Route>
            <Route path='/home' exact>
            <Sidebar id="sidebar"/>
                <div className="main">
                  <div className="greeting">
                     <div>
                       <img src="https://img.icons8.com/cotton/64/000000/gender-neutral-user--v1.png"/>
                       <span>  Hello,</span><span className="userName"> Priscila</span>
                    </div>
                  </div>
                  <Calendar events={this.state.events} currentView={'timeGridDay'}/>
                </div>
            </Route>
            <Route path='/createEvent' exact>
                <Sidebar id="sidebar"/>
                <div className="main">
                  <div className="greeting">
                    <p>Create Event</p>
                  </div>
                  <CreateEvent currentUser={this.state.currentUser}/>
                </div>
            </Route>
            <Route path='/listEvents' exact>
                <Sidebar id="sidebar"/>
                <div className="main">
                  <div className="greeting">
                    <p>All events</p>
                  </div>
                  <ListEvents events={this.state.events}/>
                </div>
            </Route>
            <Route path='/yourMonth' exact>
                <Sidebar id="sidebar"/>
                <div className="main">
                  <div className="greeting">
                    <p>Monthly</p>
                  </div>
                  <Calendar events={this.state.events} currentView={'dayGridMonth'}/>
                </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }

}

export default App;