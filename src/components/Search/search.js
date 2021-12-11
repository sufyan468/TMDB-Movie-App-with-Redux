import React, { useState, useEffect } from "react";
import MoviesCard from "../AllMovies/MoviesCard";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { DebounceInput } from "react-debounce-input";

import { getSearch } from "../../store/actions/searchAction";
import { Box, Container, Typography } from "@material-ui/core";

const Search = () => {
  const [query, setQuery] = useState("");

  const searchRes = useSelector((state) => state.searchData.searchData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query !== "") {
      dispatch(getSearch(query));
    }
  }, [dispatch, query]);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const searchBar = {
    height: "46px",
    border: "2px solid white",
    padding: "0px 1rem",
  };
  return (
    <Box>
      <Grid item sm={12} md={11} style={{ margin: "auto", textAlign: "left" }}>
        <Box className="HeroSection">
          <Typography
            variant="h3"
            color="initial"
            style={{ textAlign: "left" }}
          >
            Search here
          </Typography>
          <div className="w-100">
            <h2 className="text-white">
              Millions of movies, TV shows and people to discover. Explore now.
            </h2>
          </div>
          <div className="w-100">
            <Grid container spacing={0}>
              <DebounceInput
                className="dbounce"
                minLength={3}
                debounceTimeout={300}
                value={query}
                onChange={onChange}
                placeholder="Serach any Movie"
                style={searchBar}
              />
            </Grid>
          </div>
        </Box>
      </Grid>
      <Grid item md={12} lg={12} sm={12}>
        {!!query ? (
          searchRes?.results?.length > 0 &&
          searchRes.results.map((item) => (
            <Container>
              <Grid Container spacing={5}>
                <MoviesCard key={item.id} items={item} />
              </Grid>
            </Container>
          ))
        ) : (
          <></>
        )}
      </Grid>
    </Box>
  );
};

export default Search;
