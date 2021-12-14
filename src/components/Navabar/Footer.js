import { Box, Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.svg";
import "../../styles/styles.css";

const footerlogo = {
  height: "70px",
  margin: "2rem 0rem",
  width: "80px",
};

const Footer = () => {
  return (
    <Box style={{ background: "#032541" }}>
      <Container>
        <Link to="/">
          <img
            className="footer-logo"
            src={footer}
            alt="show"
            style={footerlogo}
          />
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
