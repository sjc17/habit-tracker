import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Landing from './Landing';
import Dashboard from './Dashboard';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  componentToRender() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return Landing;
      default:
        return Dashboard;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={this.componentToRender()} />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  actions
)(App);
