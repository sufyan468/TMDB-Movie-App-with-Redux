import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TrendingCard from "./TrendingCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllTrendings } from "../../store/actions/TrendingAction";
import Container from "@material-ui/core/Container";
import SearchMovies from "../filterMovies/SearchMovies";
const Trendings = () => {
  const dispatch = useDispatch();
  const trending = useSelector((state) => state.trending.trending);

  useEffect(() => {
    dispatch(getAllTrendings());
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
              {trending.length &&
                trending.map((trenditem) => (
                  <TrendingCard key={trenditem.id} trenditem={trenditem} />
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Trendings;
