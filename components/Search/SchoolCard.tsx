import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { SchoolSearchResultType } from '../../src/store'

const useStyles = makeStyles({
  root: {
    width: 200,
    margin: 10,
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
});

function SchoolCard({ school }: { school:SchoolSearchResultType }) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <Typography variant="h5" component="h2">
          { school["school.name"] }
        </Typography>
          { school["school.alias"].length >= 30 ? school['school.alias'].substring(0, 30) + "..." : school['school.alias'] }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          { school["school.city"] }
        </Typography>
        <Typography variant="body2" component="p">
          { school['school.state'] }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Data</Button>
      </CardActions>
    </Card>
  )
}

export default SchoolCard
