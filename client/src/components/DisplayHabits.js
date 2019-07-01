import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DisplayHabits extends Component {
  renderDaysOfWeek() {
    const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let renderArray = [];
    for (let i = 0; i < 7; i++) {
      renderArray[i] = (
        <div className="col s1 left-align" key={i}>
          {daysOfWeek[i]}
        </div>
      );
    }
    return renderArray;
  }
  renderHabitCheckboxes(habit) {
    let listArray = [];
    for (let i = 0; i < 7; i++) {
      listArray[i] = (
        <label className="col s1 valign-wrapper" key={i}>
          <input className="filled-in" type="checkbox" />
          <span />
        </label>
      );
    }
    return listArray;
  }
  render() {
    return (
      <form action="#">
        <ul>
          <li
            style={{
              width: '100%'
            }}
            className="row valign-wrapper"
          >
            <div className="col s4" />
            {this.renderDaysOfWeek()}
            <div className="col s1" />
          </li>
          {this.props.habits.map((habit, index) => {
            return (
              <li
                style={{
                  width: '100%',
                  height: '50px'
                }}
                key={index}
                className="row valign-wrapper"
              >
                <div className="col s4" style={{ textAlign: 'left' }}>
                  {habit.name}
                </div>

                {this.renderHabitCheckboxes(habit)}

                <div className="col s1 valign-wrapper">
                  <i className="material-icons">settings</i>
                </div>
              </li>
            );
          })}
        </ul>
      </form>
    );
  }
}

const mapStateToProps = ({ week }) => ({ week });

export default connect(
  mapStateToProps,
  actions
)(DisplayHabits);
