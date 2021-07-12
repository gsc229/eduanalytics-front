import React from 'react'
import { SchoolDataType } from '../../src/store'
import Typography from '@material-ui/core/Typography'
import RoomIcon from '@material-ui/icons/Room'
import LanguageIcon from '@material-ui/icons/Language'
import { Button } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

function TopData({classes, currentSchool}:{classes:any, currentSchool:SchoolDataType | undefined}) {

  const getLink = () => {
    const regex1 = new RegExp("http*")
    const regex2 = new RegExp("https*")
    const test1 = currentSchool ? regex1.test(currentSchool?.school.school_url) : false
    const test2 = currentSchool ? regex2.test(currentSchool?.school.school_url) : false

    if(test1 && test2) return currentSchool?.school.school_url

    return currentSchool ? `https://${currentSchool.school.school_url}` : '/'

  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">
        {currentSchool?.school.name}
      </Typography>
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
        //direction="row"
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

        
        <Grid xs={12} item>
          <Button href={getLink()}>
            <LanguageIcon /> Website 
          </Button>
        </Grid>

      </Grid>
    </Paper>
  );
}

export default TopData
