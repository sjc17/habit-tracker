import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HabitRow extends Component {
  state = { showOptions: false };
  async deleteHabit(habit) {
    await axios.delete('/api/deletehabit', { params: { id: habit._id } });
    this.props.fetchHabits();
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
            onClick={e => {
              try {
                this.props.updateTimestamp(habit, this.props.week[i]);
                axios.post('/api/updatetimestamp', {
                  habitID: habit._id,
                  date: this.props.week[i]
                });
              } catch (error) {
                console.log(error);
              }
            }}
          />
        </div>
      );
    }
    return listArray;
  }
  render() {
    return (
      <li>
        <div
          style={{
            width: '100%',
            height: '50px'
          }}
          className="row valign-wrapper"
        >
          <div
            className="col s4 fade-on-hover"
            style={{ textAlign: 'left', cursor: 'pointer' }}
            onClick={e => {
              this.props.setViewHabitDetails(this.props.habit._id);
            }}
          >
            {this.props.habit.name}
          </div>

          {this.renderHabitCheckboxes(this.props.habit)}

          <div
            className="col s1 valign-wrapper fade-on-hover"
            onClick={e =>
              this.setState({ showOptions: !this.state.showOptions })
            }
          >
            <i className="material-icons" style={{ cursor: 'pointer' }}>
              settings
            </i>
          </div>
        </div>
        {this.state.showOptions ? (
          <button
            className="right btn"
            style={{ marginBottom: '10px' }}
            onClick={e => {
              this.setState({ showOptions: false });
              this.deleteHabit(this.props.habit);
            }}
          >
            Delete Habit
          </button>
        ) : (
          undefined
        )}
      </li>
    );
  }
}
const mapStateToProps = ({ week }) => ({ week });

export default connect(
  mapStateToProps,
  actions
)(HabitRow);
