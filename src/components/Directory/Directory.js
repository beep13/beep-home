import React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import '../../App.css';
import MusicCard from '../../components/Cards/MusicCard';
import ProjectCard from '../../components/Cards/ProjectCard';


export default function Directory() {
  return(
    <div className="App-header">
    <h1>Pick ur poison</h1>
    <div className="directory-container">
      <Link className="nav-click" to="/music">
        <Card variant="outlined">{<MusicCard />}</Card>
      </Link>
      <Link className="nav-click" to="/projects">
        <Card variant="outlined">{<ProjectCard />}</Card>
      </Link>
    </div>
    </div>
  )
}
