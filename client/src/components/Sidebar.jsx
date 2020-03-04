import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar = ({onClick}) => {
  return (
    <div className="sidebar">
      <div className="logo-area">
          {/* <div className="nav-img"><img src={navImg}/></div> */}
          <div className="title">Plan My Day</div>
      </div>
      <div className="navigation">
        <NavLink className="item" activeClassName="active" to="/home">
          <div className="icon"><i className="fas fa-home" ></i></div>
          <div className="name">Home</div>
        </NavLink>
        <NavLink className="item" activeClassName="active" to="/createEvent">
          <div className="icon"><i class="fas fa-calendar-plus"></i></div>
          <div className="name">Create Event</div>
        </NavLink>
        <NavLink className="item" activeClassName="active" to="/listEvents">
          <div className="icon"><i class="fas fa-calendar-alt"></i></div>
          <div className="name">List Events</div>
        </NavLink>
        <NavLink className="item" onClick={onClick} activeClassName="active" to="/yourMonth">
          <div className="icon"></div>
          <div className="name">Monthly</div>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar