import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HabitRow extends Component {
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
              await axios.post('/api/updatetimestamp', {
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
      <li
        style={{
          width: '100%',
          height: '50px'
        }}
        className="row valign-wrapper"
      >
        <div className="col s4" style={{ textAlign: 'left' }}>
          {this.props.habit.name}
        </div>

        {this.renderHabitCheckboxes(this.props.habit)}

        <div className="col s1 valign-wrapper">
          <i className="material-icons">settings</i>
        </div>
      </li>
    );
  }
}
const mapStateToProps = ({ week }) => ({ week });

export default connect(
  mapStateToProps,
  actions
)(HabitRow);
