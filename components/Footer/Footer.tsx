import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.edanalytics.org/">
        Education Analytics
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer style={{ position: "sticky" }} className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Analytics can help students succeed
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        We collaborate with partners to deliver the right data at the right time
        to take the right steps to support all students.
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
