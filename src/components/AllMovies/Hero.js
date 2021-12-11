import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";

const heading = {
  color: "white",
  width: "100%",
};
const InputHeightNew = {
  height: "46px",
};

const Hero = (props) => {
  return (
    <Grid item={true} sm={12} md={11} style={{ margin: "auto" }}>
      <Box className="HeroSection">
        <h1 variant="h1" style={heading} color="initial">
          Search here
        </h1>
        <div className="w-100">
          <h2 className="text-white">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </div>
        <div className="w-100">
          <Grid container spacing={0}>
            <Grid md={12} lg={12} sm={12}>
              <TextField
                placeholder="Search here"
                style={InputHeightNew}
                id="demo-helper-text-aligned-no-helper"
                label="Search Here ...."
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    </Grid>
  );
};

export default Hero;
