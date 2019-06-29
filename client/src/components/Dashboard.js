import React, { Component } from 'react';
import Navbar from './Navbar';
import DisplayHabits from './DisplayHabits';
import NewHabitButton from './NewHabitButton';
class Dashboard extends Component {
  state = { showForm: false };
  render() {
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <Navbar />
        <DisplayHabits showForm={this.state.showForm} />
        <NewHabitButton />
      </div>
    );
  }
}

export default Dashboard;
