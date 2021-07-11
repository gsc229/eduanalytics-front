import React, { forwardRef } from 'react'
import { SchoolDataType } from '../../src/store'
import Typography from '@material-ui/core/Typography'
import RoomIcon from '@material-ui/icons/Room'
import LanguageIcon from '@material-ui/icons/Language'
import ExtLink from '@material-ui/core/Link'
import { Button } from '@material-ui/core'
import Link from 'next/link'
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
        <Grid justifyContent="center" alignContent="center" item>
          <Button href={`https://${currentSchool?.school.school_url}`}>
            <LanguageIcon /> Website 
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TopData
