import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import UpCommingCard from "./UpCommingCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllUpCommings } from "../../store/actions/upcommingActions";
import Container from "@material-ui/core/Container";
import SearchMovies from "../filterMovies/SearchMovies";
import Typography from "@material-ui/core/Typography";
const UpCommings = () => {
  const dispatch = useDispatch();

  const upcoming = useSelector((state) => state.upcoming.upcoming);

  useEffect(() => {
    dispatch(getAllUpCommings());
  }, [dispatch]);

  return (
    <Container style={{ marginTop: "3rem" }}>
      <Grid container spacing={5}>
        <Grid item={true} xs={12} md={12} lg={12}>
          <Typography variant="h4" color="initial">
            Upcoming Movies
          </Typography>
        </Grid>
        <Grid item={true} xs={12} md={3} lg={3}>
          <SearchMovies />
        </Grid>
        <Grid item={true} xs={12} sm={12} md={8} lg={9}>
          <Grid container spacing={4}>
            {upcoming.length &&
              upcoming.map((upcitem) => (
                <UpCommingCard key={upcitem.id} upcitem={upcitem} />
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UpCommings;
