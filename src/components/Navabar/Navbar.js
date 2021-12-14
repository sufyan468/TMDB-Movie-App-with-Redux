import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const LogoStyle = {
  height: "20px",
  width: "154",
};

export default function Navbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/">
              <img style={LogoStyle} src={logo} alt="show" />
            </Link>
          </Typography>

          <Link className={classes.link} to="/trending">
            Trendings
          </Link>
          <Link className={classes.link} to="/upcomming">
            Upcommings
          </Link>
          <Link className={classes.link} to="/tvshows">
            TV Shows
          </Link>
          <Link className={classes.link} to="/people">
            People
          </Link>
          <Link className={classes.link} to="/search">
            <Button
              className={classes.button}
              variant="contained"
              href="#contained-buttons"
            >
              <SearchIcon />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
