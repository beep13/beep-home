import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

export default function Directory() {
  return(
    <div className="App-header">
      <Link to="/music">Music</Link>
      <Link to="/projects">Projects</Link>
    </div>
  )
}
