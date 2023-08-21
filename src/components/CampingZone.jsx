import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Collapse, Fade } from "@mui/material";
import { Container, Grid } from "@mui/material";
import campingList from "./campingList.json";
import "./scss/CampingZone.scss";

const CampingZone = () => {
  const CityCard = ({ campingInfo }) => {
    const { name, location, description, imgSrc } = campingInfo;
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <Card className="camping-card">
        <CardMedia component="img" height="200" image={imgSrc} alt={name} />
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <Typography className="camping-description">{description}</Typography>
          <Typography variant="subtitle1" className="camping-location">
            Location: {location}
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Fade in={expanded}>
              <button onClick={handleExpandClick}>
                {expanded ? "Collapse" : "Expand"}
              </button>
            </Fade>
          </Collapse>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container maxWidth="lg" className="camping-container">
      <Grid container spacing={3}>
        {campingList.map((camping, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CityCard campingInfo={camping} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CampingZone;
