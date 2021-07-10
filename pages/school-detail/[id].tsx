import React from 'react'
import BasicLayout from '../../layouts/BasicLayout'
import { useSchoolsContext } from '../../src/store'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const SchoolDetail = () => {

  const { currentSchool } = useSchoolsContext()

  const classes = useStyles();


  return (
    <BasicLayout>
      <div className="school-detail-page page-container">
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>{currentSchool?.school.name}</Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>{currentSchool?.school.name}</Paper>
          </Grid>
        </Grid>
      </div>
      </div>
    </BasicLayout>
  )
}

export default SchoolDetail
