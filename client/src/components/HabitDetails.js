import React, { Component } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CalendarHeatMap from 'react-calendar-heatmap';

class HabitDetails extends Component {
  state = {
    habit: this.props.habits.filter(item => {
      return item._id === this.props.view;
    })[0]
  };

  render() {
    return (
      <div>
        <h1>{this.state.habit.name}</h1>
        <p style={{ marginTop: '50px', marginBottom: '50px' }}>
          {this.state.habit.description}
        </p>
        <div
          className="valign-wrapper fade-on-hover"
          onClick={e => {
            this.props.setViewHabitDetails(null);
          }}
          style={{ position: 'fixed', top: '100px', left: '50px' }}
        >
          <i className="material-icons medium">keyboard_arrow_left</i>
        </div>
        <CalendarHeatMap
          startDate={new Date('2019-01-01')}
          endDate={new Date('2019-12-31')}
          values={this.state.habit.timeStamps.map(timeStamp => {
            console.log(formatDate(timeStamp));
            return { date: formatDate(timeStamp) };
          })}
          classForValue={value => {
            if (!value) {
              return 'color-empty';
            }
            return 'color-full';
          }}
          showWeekdayLabels={true}
          weekdayLabels={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ habits, view }) => ({ habits, view });

export default connect(
  mapStateToProps,
  actions
)(HabitDetails);

const formatDate = dateString => {
  // Example: "Wed Aug 07 2019" => "2019-08-07"
  const dateStringArray = dateString.split(' ');
  const monthToNum = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  };
  const year = dateStringArray[3];
  const day = dateStringArray[2];
  const month = monthToNum[dateStringArray[1]];
  return `${year}-${month}-${day}`;
};
