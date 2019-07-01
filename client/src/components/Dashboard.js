import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../actions';
import Navbar from './Navbar';
import DisplayHabits from './DisplayHabits';
import NewHabitButton from './NewHabitButton';
import NewHabitForm from './NewHabitForm';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.createHabit = this.createHabit.bind(this);

    this.state = {
      showForm: false
    };
  }

  componentDidMount() {
    const d = new Date();
    this.props.setCurrentWeek(d);
  }
  toggleForm() {
    this.setState({ showForm: !this.state.showForm });
  }

  async createHabit(values) {
    const res = await axios.post('/api/create', {
      ...values
    });
    this.toggleForm();
    this.props.fetchHabits();
  }

  render() {
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <Navbar />
        <DisplayHabits habits={this.props.habits} />
        <NewHabitButton toggleForm={this.toggleForm} />
        {this.state.showForm ? (
          <NewHabitForm
            onSubmit={this.createHabit}
            closeForm={this.toggleForm}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, habits }) => {
  return {
    auth,
    habits
  };
};

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
