import React, { useEffect } from "react";
import MoviesCard from "./MoviesCard";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { getAllMovies } from "../../store/actions/AllmovieAction";
import { Container } from "@material-ui/core";

const AllMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <div className="movies-container">
      <Container>
        <Grid container item xs={12} spacing={2}>
          {movies.length &&
            movies.map((item) => <MoviesCard key={item.id} items={item} />)}
        </Grid>
      </Container>
    </div>
  );
};

export default AllMovies;
