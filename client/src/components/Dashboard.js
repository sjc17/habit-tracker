import React, { Component } from 'react';
import Navbar from './Navbar';
import DisplayHabits from './DisplayHabits';
import NewHabitButton from './NewHabitButton';
import NewHabitForm from './NewHabitForm';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.state = {
      showForm: false
    };
  }
  toggleForm() {
    this.setState({ showForm: !this.state.showForm });
  }
  render() {
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <Navbar />
        <DisplayHabits />
        <NewHabitButton toggleForm={this.toggleForm} />
        {this.state.showForm ? <NewHabitForm /> : null}
      </div>
    );
  }
}

export default Dashboard;
