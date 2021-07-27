import { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import BasicLayout from "../layouts/BasicLayout";
import { useSchoolsContext } from "../src/store";
import SchoolCard from "../components/Search/SchoolCard";
import CircularIndeterminate from "../components/Progress/CircularIndeterminate";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  startContainer: {
    margin: theme.spacing(4),
  },
  paper: {
    width: "50%",
    height: "100%",
    margin: "auto",
    textAlign: "center",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    //backgroundColor: "lightBlue",
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Home() {
  const classes = useStyles();
  const { schools, isSearching, loadFromLocalStorage } = useSchoolsContext();

  useEffect(() => {
    const lsSchools = localStorage.getItem("schools");

    if (lsSchools) {
      loadFromLocalStorage(JSON.parse(lsSchools));
    } else loadFromLocalStorage([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BasicLayout>
      <div className="page-container">
        {!isSearching && schools.length > 0 && (
          <Grid container className={styles.school_card_container}>
            {schools?.map((school, idx) => (
              <Grid item key={school.id}>
                <SchoolCard school={school} />
              </Grid>
            ))}
          </Grid>
        )}
        {isSearching && (
          <div style={{ marginTop: "20%" }}>
            <CircularIndeterminate />
          </div>
        )}

        {schools.length === 0 && !isSearching && (
          <Grid
            className={classes.startContainer}
            alignItems="center"
            justifyContent="center"
            container
          >
            <Grid className={classes.gridItem} xs={12} item>
              <Paper className={classes.paper}>
                <Typography variant="h5">
                  Start Searching For a School
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        )}
      </div>
    </BasicLayout>
  );
}
