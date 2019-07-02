import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';

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
        <div className="col s1 valign-wrapper" key={i}>
          <div
            style={{
              backgroundColor: habit.timeStamps.includes(this.props.week[i])
                ? '#7ff'
                : '#eee',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              borderStyle: 'solid',
              borderColor: '#ccc',
              borderWidth: '2px',
              cursor: 'pointer'
            }}
            onClick={async e => {
              await axios.post('/api/addtimestamp', {
                habitID: habit._id,
                date: this.props.week[i]
              });
              this.props.fetchHabits();
            }}
          />
        </div>
      );
    }
    return listArray;
  }
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

const mapStateToProps = ({ week }) => ({ week });

export default connect(
  mapStateToProps,
  actions
)(DisplayHabits);
