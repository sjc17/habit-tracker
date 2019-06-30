import React, { Component } from 'react';
import { connect } from 'react-redux';

import Landing from './Landing';
import Dashboard from './Dashboard';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchHabits();
  }

  componentToRender() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return <Landing />;
      default:
        return <Dashboard />;
    }
  }

  render() {
    return this.componentToRender();
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(
  mapStateToProps,
  actions
)(App);
