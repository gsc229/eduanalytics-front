import React from 'react'
import Card from '@material-ui/core/Card'
import router from 'next/router'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { SchoolDataType } from '../../src/store'
import { useSchoolsContext } from '../../src/store'

const useStyles = makeStyles(theme => (
  {
    root: {
      width: 250,
      margin: theme.spacing(2),
      minHeight: 400,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }
));

function SchoolCard({ school }: { school:SchoolDataType }) {

  const classes = useStyles();

  const { currentSchoolSet, setOnSearchPage, setIsSearching } = useSchoolsContext()

  const handleSchoolClick = () => {
    setOnSearchPage(false)
    currentSchoolSet(school)
    setIsSearching(true)
    router.push(`/school-detail/${school.school.name.replace(/ /g, "-")}`)
  }

  return (
    <Card  className={classes.root}>
      <CardContent>
        <Typography style={{cursor: "pointer"}} onClick={handleSchoolClick} variant="h5" component="h2">
          { school.school.name }
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          { school.school.alias? school.school.alias?.substring(0, 30) + "..." : school.school.alias }
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          { school.school.city }
        </Typography>

        <Typography variant="body2" component="p">
          { school.school.state }
        </Typography>

      </CardContent>
      <CardActions>
        <Button onClick={handleSchoolClick}>See Data</Button>
      </CardActions>
    </Card>
  )
}

export default SchoolCard
