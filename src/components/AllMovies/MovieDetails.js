import React, { useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import { Box, Container } from "@material-ui/core";
import Overview from "../Overview";
import BoxContent from "../BoxContent";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../store/actions/MoviesDetailsActions";
import { getMovieReview } from "../../store/actions/moviesReviewAction";
const imgaeBseUrl = "https://image.tmdb.org/t/p/original/";

const DeatilsImage = {
  height: "450px",
  width: "100%",
  borderRadius: "8px",
};
const colorHeading2 = {
  marginLeft: "2rem",
  color: "white",
  fontFamily: "Source Sans Pro', Arial, sans-serif",
};
const MovieDetails = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.movieDetail.movieDetail);

  useEffect(() => {
    dispatch(getMovieDetail(id));
    dispatch(getMovieReview(id));
  }, [dispatch, id]);

  const dbImages = `${imgaeBseUrl}${details.poster_path}`;
  return (
    <>
      <Overview />
      <Box className="w-100" style={{ background: "#032541" }}>
        <Container style={{ padding: "4rem 0rem" }}>
          <Grid item container spacing={5} style={{ alignitems: "start" }}>
            <Grid item xs={12} md={12} lg={3}>
              <CardMedia
                image={dbImages}
                style={DeatilsImage}
                title={details.title}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={9}>
              <Typography variant="h5" color="initial" style={colorHeading2}>
                {details.original_title}
              </Typography>
              <p style={colorHeading2}>{details.tagline}</p>
              <br />
              <Typography variant="h6" color="initial" style={colorHeading2}>
                OverView:
              </Typography>
              <p style={colorHeading2}>{details.overview}</p>
              <Grid
                container
                spacing={5}
                style={{ paddingTop: "5rem", marginLeft: "1rem" }}
              >
                <Grid item xs={12} md={6} lg={3} style={colorHeading2}>
                  <Typography variant="h6" component="h6">
                    Release Date
                  </Typography>
                  <p style={colorHeading2}>{details.release_date}</p>
                </Grid>
                <Grid item xs={12} md={6} lg={3} style={colorHeading2}>
                  <Typography variant="h6" component="h6">
                    Popularity
                  </Typography>
                  <p style={colorHeading2}>{details.popularity}</p>
                </Grid>
                <Grid item xs={12} md={6} lg={3} style={colorHeading2}>
                  <Typography variant="h6" component="h6">
                    Language
                  </Typography>
                  <p style={colorHeading2}>{details.original_language}</p>
                </Grid>

                <Typography>{details.revenue}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <BoxContent />
    </>
  );
};

export default MovieDetails;
