import React from 'react'
import BasicLayout from '../../layouts/BasicLayout'
import { useSchoolsContext } from '../../src/store'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { RaceEthDonut } from '../../components/SchoolDetail/RaceEthDonut'
import { ProgramDonut  } from '../../components/SchoolDetail/ProgramDonut'
import data from '../../components/SchoolDetail/reTestData.json'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: "white",
      margin: theme.spacing(1)
    },
  }),
);

const SchoolDetail = () => {

  const { currentSchool } = useSchoolsContext()

  const classes = useStyles()


  return (
    <BasicLayout>
      <div className="school-detail-page page-container">
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}><div>{currentSchool?.school.name}</div></Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <div className="pie-container" >
                <div className="pie-wrapper">
                  <RaceEthDonut data={data} />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <div className="pie-container" >
                <div className="pie-wrapper">
                  <ProgramDonut data={data} />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>{currentSchool?.school.name}</Paper>
          </Grid>
        </Grid>
      </div>
      {/* <pre style={{color: "white"}} className="pre">{JSON.stringify(currentSchool, null, 4)}</pre> */}
      </div>
    </BasicLayout>
  )
}

export default SchoolDetail
