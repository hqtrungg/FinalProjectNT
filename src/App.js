import React, { Component } from 'react';
import Login from './components/login';
import NewFeed from './components/newfeed';
import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timeline/>
      </div>
    );
  }
}

export default App;
