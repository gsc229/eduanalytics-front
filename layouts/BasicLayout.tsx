import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { makeStyles } from '@material-ui/core'
import SideDrawer from '../components/Drawer/SideDrawer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%"
  }
}))


const BasicLayout = ({ children }:{ children:React.ReactNode }) => {

  const classes = useStyles()

  return (
    <div 
    className={classes.root}>
       <SideDrawer />
       <div className="page-wrapper">
        <Header />
          {children}
        <Footer />
       </div>
    </div>
  )
}

export default BasicLayout
