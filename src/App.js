import React, { Component } from 'react';
import './App.css';


class App extends Component {
  componentWillMount() {
    window.location = window.location;
    setInterval(() => {
      window.location = window.location;
    }, 1000)
  }
  render() {
    return (
      <div>
        <p>it keeps on loading forever.</p>
      </div>
    )
  }
}

export default App;
