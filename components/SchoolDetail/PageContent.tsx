import React, { useRef, useEffect } from 'react'
import { useSchoolsContext } from '../../src/store'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { RaceEthDonut } from '../../components/SchoolDetail/RaceEthDonut'
import { ProgramDonut  } from '../../components/SchoolDetail/ProgramDonut'
import { ProgramDonutCanvas } from '../../components/SchoolDetail/ProgramDonutCanvas'
import TopPaper from '../../components/SchoolDetail/TopPaper'
import { prepData } from '../../components/SchoolDetail/prepDonutData'

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

function PageContent() {

  const componentRef = useRef(null);
  const { currentSchool, setComponentRef } = useSchoolsContext()
  const classes = useStyles()

  useEffect(() => {
    setComponentRef(componentRef)
  }, [componentRef]);

  return (
    <div ref={componentRef} className="school-detail-page page-container">
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TopPaper classes={classes} currentSchool={currentSchool}  />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <div className="pie-container" >
                <div className="pie-wrapper">
                  {currentSchool && <RaceEthDonut data={prepData(currentSchool.race_ethnicity)} />}
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <div className="pie-container" >
                <div className="pie-wrapper">
                  {currentSchool && <ProgramDonut data={prepData(currentSchool.program_percentage)} />}
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>{currentSchool?.school.name}</Paper>
          </Grid>
        </Grid>
      </div>
      </div>
  )
}

export default PageContent
