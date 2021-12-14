import React, { useEffect } from "react";
import Overview from "../Overview";
import BoxContent from "../BoxContent";
import { useDispatch, useSelector } from "react-redux";
import { getTvDetail } from "../../store/actions/TvShowsDetailsActions";
import { getTvShowReview } from "../../store/actions/TvShowReviewAction";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";
import ImgSkeleton from "../skeleton/ImgSkeleton";

const TvShowsDetails = (props) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const tvdata = useSelector((state) => state.tvDetail.tvDetail);

  useEffect(() => {
    dispatch(getTvDetail(id));
    dispatch(getTvShowReview(id));
  }, [dispatch, id]);

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

  return (
    <>
      <Overview />
      <Box className="w-100" style={{ background: "#032541" }}>
        <Container style={{ padding: "4rem 0rem" }}>
          <Grid container spacing={5} style={{ alignitems: "start" }}>
            <Grid item xs={12} md={12} lg={3}>
              {tvdata.poster_path ? (
                <CardMedia
                  image={`https://image.tmdb.org/t/p/original/${tvdata.poster_path}`}
                  style={DeatilsImage}
                  title={tvdata.title}
                />
              ) : (
                <ImgSkeleton />
              )}
            </Grid>
            <Grid item xs={12} md={12} lg={9}>
              <Typography variant="h5" color="initial" style={colorHeading2}>
                {tvdata.name}
              </Typography>
              <p style={colorHeading2}>{tvdata.tagline}</p>
              <br />
              <Typography variant="h6" color="initial" style={colorHeading2}>
                OverView:
              </Typography>
              <p style={colorHeading2}>{tvdata.overview}</p>

              <Grid item xs={12} md={12} lg={12} style={colorHeading2}>
                <Typography variant="h5" component="h2"></Typography>
                <Typography>{tvdata.popularity}</Typography>
                <Typography>{tvdata.release_date}</Typography>
                <Typography>{tvdata.original_language}</Typography>
                <Typography>{tvdata.revenue}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <BoxContent />
    </>
  );
};

export default TvShowsDetails;
