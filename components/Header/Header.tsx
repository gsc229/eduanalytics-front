import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import SchoolIcon from '@material-ui/icons/School';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },

}));


const Header = () => {

  const classes = useStyles()

  return (
    <AppBar position="sticky">
        <Toolbar>
          <SchoolIcon color="secondary" className={classes.icon} />
          <Typography variant="h6" color="secondary" noWrap>
            College Scorecard
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header
