import React, { useEffect } from "react";
import TvShowsCard from "./TvShowsCard";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { getTvShows } from "../../store/actions/tVShowsAction";
import Container from "@material-ui/core/Container";
import SearchMovies from "../filterMovies/SearchMovies";

const TvShows = () => {
  const dispatch = useDispatch();
  const tvshows = useSelector((state) => state.tvshows.tvshows);

  useEffect(() => {
    dispatch(getTvShows());
  }, [dispatch]);

  return (
    <>
      <Container style={{ marginTop: "5rem" }}>
        <Grid container spacing={5}>
          <Grid item={true} xs={12} md={3} lg={3}>
            <SearchMovies />
          </Grid>
          <Grid item={true} xs={12} sm={12} md={8} lg={9}>
            <Grid container spacing={4}>
              {tvshows.length &&
                tvshows.map((tvitem) => (
                  <TvShowsCard key={tvitem.id} tvitem={tvitem} />
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TvShows;
