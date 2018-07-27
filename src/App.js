import React, { Component } from 'react';
import { Route } from "react-router-dom";

import First from './components/First';
import Second from './components/Second';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={First} />
        <Route exact path="/second" component={Second} />
      </div>
    );
  }
}

export default App;
