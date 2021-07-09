import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import DrawerList from './DrawerList'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  }
}))


const SideDrawer = () => {

  const classes = useStyles()

  return (
    <Drawer 
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
      >
      <div>
        <Typography variant="h5">
          Scool Finder
        </Typography>
        <DrawerList />
      </div>
      </Drawer>
  );
}

export default SideDrawer;

