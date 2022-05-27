import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Music from './components/Music/Music';
import Directory from './components/Directory/Directory';
import Projects from './components/Projects/Projects'
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/music" element={<Music />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
