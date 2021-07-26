import React, { useRef, useMemo } from "react";
import { useSchoolsContext } from "../../src/store";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { RaceEthDonut } from "../../components/SchoolDetail/RaceEthDonut";
import { ProgramDonut } from "../../components/SchoolDetail/ProgramDonut";
import EarningsChart from "./EarningsChart";
import TopPaper from "../../components/SchoolDetail/TopPaper";
import { prepData } from "../../components/SchoolDetail/prepDonutData";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "white",
      margin: theme.spacing(1),
    },
    topPaperText: {
      width: "fit-content",
    },
  })
);

function PageContent() {
  const componentRef = useRef(null);
  const { currentSchool, setComponentRef } = useSchoolsContext();
  const classes = useStyles();

  setComponentRef(componentRef);

  const { raceData, programData } = useMemo(() => {
    const raceData = prepData(currentSchool?.race_ethnicity);
    const programData = prepData(currentSchool?.program_percentage);

    return {
      raceData,
      programData,
    };
  }, [currentSchool]);

  return (
    <div ref={componentRef} className="school-detail-page page-container">
      <div className={classes.root}>
        <Grid justifyContent="center" container spacing={3}>
          <Grid item xs={10}>
            <TopPaper classes={classes} currentSchool={currentSchool} />
          </Grid>
        </Grid>
        <Grid justifyContent="center" container spacing={3}>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <Typography>Race and Ethnicity</Typography>
              <div className="pie-container">
                <div className="pie-wrapper">
                  {currentSchool && <RaceEthDonut data={raceData} />}
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid justifyContent="center" container spacing={3}>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <Typography>Programs</Typography>
              <div className="pie-container">
                <div className="pie-wrapper">
                  {currentSchool && <ProgramDonut data={programData} />}
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid justifyContent="center" container spacing={3}>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <Typography>Earnings After Entry Into Workforce</Typography>
              <div className="pie-container">
                <div className="pie-wrapper">
                  {currentSchool && <EarningsChart />}
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PageContent;
