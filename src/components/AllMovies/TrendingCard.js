import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const imgaeBseUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";

export default function TrendingCard({ trenditem }) {
  const dbImages = `${imgaeBseUrl}${trenditem.poster_path}`;

  return (
    <Grid item xs={12} md={6} lg={3}>
      <Link to={`/movieDetails/${trenditem.id}`}>
        <Card>
          <CardActionArea>
            <CardMedia image={dbImages} title={trenditem.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {trenditem.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {trenditem.vote_average}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
