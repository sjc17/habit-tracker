import React, { Component } from 'react';
import { connect } from 'react-redux';
import HabitRow from './HabitRow';
import * as actions from '../actions';

class DisplayHabits extends Component {
  renderDaysOfWeek() {
    let renderArray = [];
    for (let i = 0; i < 7; i++) {
      renderArray[i] = (
        <div
          className="col s1 left-align"
          key={i}
          style={
            // Bold font for today
            this.props.week[i] === new Date().toDateString()
              ? { fontWeight: 'bold' }
              : {}
          }
        >
          {this.props.week[i] ? `${this.props.week[i].slice(0, 3)}` : undefined}
          <br />
          {this.props.week[i]
            ? `${this.props.week[i].slice(4, -4)}`
            : undefined}
        </div>
      );
    }
    return renderArray;
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
            <div className="col s3" />
            <div
              className="col s1 valign-wrapper disable-selection"
              onClick={e => {
                this.props.changeCurrentWeek(true, this.props.week);
              }}
            >
              <i className="material-icons">keyboard_arrow_left</i>
            </div>
            {this.renderDaysOfWeek()}
            <div
              className="col s1 valign-wrapper disable-selection"
              onClick={e => {
                this.props.changeCurrentWeek(false, this.props.week);
              }}
            >
              <i className="material-icons">keyboard_arrow_right</i>
            </div>
          </li>
          {this.props.habits.map((habit, index) => {
            return <HabitRow key={index} habit={habit} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ habits, week }) => ({ habits, week });

export default connect(
  mapStateToProps,
  actions
)(DisplayHabits);
