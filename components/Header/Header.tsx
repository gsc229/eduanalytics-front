import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SchoolIcon from "@material-ui/icons/School";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSchoolsContext } from "../../src/store";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  const { drawerOpen, setDrawerOpen } = useSchoolsContext();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setDrawerOpen(!drawerOpen)}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <SchoolIcon color="secondary" className={classes.icon} />
        <Typography variant="h6" color="secondary" noWrap>
          College Snapshot
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
