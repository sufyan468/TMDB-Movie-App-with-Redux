import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function PeopleCard({ pitem }) {
  const dbImages = `https://image.tmdb.org/t/p/original/${pitem.profile_path}`;

  return (
    <Grid item spacing={5} xs={12} md={6} lg={3}>
      <Link to={`/peopleDetails/${pitem.id}`}>
        <Card>
          <CardActionArea>
            <CardMedia image={dbImages} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {pitem.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {pitem.vote_average}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
