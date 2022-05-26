import React, { Component } from 'react';
import './App.css';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'landing'
    }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to beep's house</h1>
        <p>All right, let's go</p>
          <ArrowForwardRoundedIcon className="arrow" fontSize="large" />
      </header>
    </div>
  );
}
}

export default App;
