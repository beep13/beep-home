import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        style={{ height: 140 }}
        component="img"
        height="140"
        image={require("./beepatadesk.JPG")}
        alt="beep's projects"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Projects
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Checkout some projects I've worked on here
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
