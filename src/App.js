import React, { Component } from 'react';
import './App.css';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to beep's house</h1>
        <p>All right, let's go</p>
        <Link to="/directory">
          <ArrowForwardRoundedIcon className="nav-click" fontSize="large" />
        </Link>
      </header>
    </div>
  );
}
}

export default App;
