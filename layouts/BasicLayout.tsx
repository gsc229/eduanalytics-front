import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import { width } from '@material-ui/system'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%"
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  }
  
}))


const BasicLayout = ({ children }:{ children:React.ReactNode }) => {

  const classes = useStyles()

  return (
    <div 
    className={classes.root}>
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
        </div>
      </Drawer>
       <div className="page-wrapper">
        <Header />
          {children}
        <Footer />
       </div>
    </div>
  )
}

export default BasicLayout
