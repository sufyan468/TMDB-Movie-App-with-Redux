import React, { useEffect } from "react";
import PeopleCard from "./peopleCard";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { getAllPeople } from "../../store/actions/peopleActions";
import Container from "@material-ui/core/Container";
import SearchMovies from "../filterMovies/SearchMovies";

const AllPeople = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.people);

  useEffect(() => {
    dispatch(getAllPeople());
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
              {people.length &&
                people.map((pitem) => (
                  <PeopleCard key={pitem.id} pitem={pitem} />
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AllPeople;
