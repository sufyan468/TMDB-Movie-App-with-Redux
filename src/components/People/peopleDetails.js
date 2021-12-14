import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getPeopleDetail } from "../../store/actions/PeopleDetailsActions";
import { useParams } from "react-router-dom";
import { Box, Container } from "@material-ui/core";
import Overview from "../Overview";
import BoxContent from "../BoxContent";
import ImgSkeleton from "../skeleton/ImgSkeleton";

const PeopleDetails = (props) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const peopledata = useSelector((state) => state.peopleDetail.peopleDetail);

  useEffect(() => {
    dispatch(getPeopleDetail(id));
  }, [dispatch, id]);

  const useStyles = makeStyles({
    colorHeading: {
      marginLeft: "2rem",
      color: "#000",
      fontFamily: "Source Sans Pro', Arial, sans-serif",
    },
    DeatilsImage: {
      height: "450px",
      width: "100%",
      borderRadius: "8px",
    },
  });

  const classes = useStyles();

  return (
    <>
      <Overview />
      <Box className="w-100">
        <Container style={{ padding: "4rem 0rem" }}>
          <Grid container spacing={5} style={{ alignItems: "start" }}>
            <Grid item xs={12} md={12} lg={3}>
              {peopledata.profile_path ? (
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/original/${peopledata.profile_path}`}
                  className={classes.DeatilsImage}
                  title={peopledata.title}
                />
              ) : (
                <ImgSkeleton />
              )}
            </Grid>
            <Grid item xs={12} md={12} lg={9}>
              <Typography
                variant="h5"
                color="initial"
                className={classes.colorHeading}
              >
                {peopledata.name}
              </Typography>
              <br />
              <Typography
                variant="h6"
                color="initial"
                className={classes.colorHeading}
              >
                OverView:
              </Typography>
              <p className={classes.colorHeading}>{peopledata.biography}</p>

              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                className={classes.colorHeading}
              >
                <Typography variant="h5" component="h2"></Typography>
                <Typography color="textSecondary">
                  {peopledata.known_for_department}
                </Typography>
                <Typography variant="body2" component="p">
                  {peopledata.popularity}
                </Typography>
                <Typography variant="body2" component="p">
                  {peopledata.birthday}
                </Typography>
                <Typography variant="body2" component="p">
                  {peopledata.place_of_birth}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <BoxContent />
    </>
  );
};

export default PeopleDetails;
