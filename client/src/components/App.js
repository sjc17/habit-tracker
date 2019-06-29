import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Route path="/" exact component={Landing} />
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
