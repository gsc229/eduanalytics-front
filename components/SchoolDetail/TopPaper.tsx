import React from 'react'
import { SchoolDataType } from '../../src/store'
import Typography from '@material-ui/core/Typography'
import RoomIcon from '@material-ui/icons/Room'
import LanguageIcon from '@material-ui/icons/Language'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

function TopData({classes, currentSchool}:{classes:any, currentSchool:SchoolDataType | undefined}) {

  

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">{currentSchool?.school.name}</Typography>
      {currentSchool?.school.alias && (
        <Typography variant="body1">
          Alias: {currentSchool?.school.alias}
        </Typography>
      )}
      <Typography variant="body2">
        Number of Students: {currentSchool?.size}
      </Typography>
      <Grid
        style={{ marginTop: "2px" }}
        spacing={1}
        justifyContent="center"
        container
        direction="row"
      >
        <Grid item>
          <RoomIcon />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            {currentSchool?.school.city}, &nbsp;
            {currentSchool?.school.state}
            &nbsp;
            {currentSchool?.school.zip}
          </Typography>
        </Grid>
      </Grid>
      <Grid spacing={1} justifyContent="center" container direction="row">
        <Grid item>
          <LanguageIcon />
        </Grid>
        <Grid item>
          <Typography className={classes.root}>
            <Link
              href={currentSchool?.school.school_url}
              
            >
              Website
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TopData
