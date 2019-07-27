import React, { Component } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HabitDetails extends Component {
  state = {
    habit: this.props.habits.filter(item => {
      return item._id === this.props.view;
    })[0]
  };

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {}

  render() {
    return (
      <div>
        <h3>{this.state.habit.name}</h3>
        <p>{this.state.habit.description}</p>
        <div
          className="valign-wrapper fade-on-hover"
          onClick={e => {
            this.props.setViewHabitDetails(null);
          }}
          style={{ position: 'fixed', top: '100px', left: '50px' }}
        >
          <i className="material-icons medium">keyboard_arrow_left</i>
        </div>
        <ul ref="chart" />
      </div>
    );
  }
}

const mapStateToProps = ({ habits, view }) => ({ habits, view });

export default connect(
  mapStateToProps,
  actions
)(HabitDetails);
