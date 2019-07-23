import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HabitDetails extends Component {
  render() {
    const habit = this.props.habits.filter(item => {
      return item._id === this.props.view;
    })[0];
    return (
      <div>
        <h3>{habit.name}</h3>
        <p>{habit.description}</p>
        <div
          className="valign-wrapper disable-selection"
          onClick={e => {
            this.props.setViewHabitDetails(null);
          }}
          style={{ position: 'fixed', top: '100px', left: '50px' }}
        >
          <i className="material-icons medium">keyboard_arrow_left</i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ habits, view }) => ({ habits, view });

export default connect(
  mapStateToProps,
  actions
)(HabitDetails);
