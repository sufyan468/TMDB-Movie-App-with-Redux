import { Box } from "@material-ui/core";
import React from "react";

const overviewBar = {
  width: "100%",
  textAlign: "center",
  height: "46px",
  color: "#000",
  fontWeight: "400",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "1px solid #f3f3f3",
};

const Overview = () => {
  return (
    <>
      <Box style={overviewBar}>OverView</Box>
    </>
  );
};

export default Overview;
