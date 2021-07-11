import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import GetAppIcon from '@material-ui/icons/GetApp'
import { makeStyles, useTheme } from '@material-ui/core'
import Typography from "@material-ui/core/Typography"
import { useSchoolsContext } from '../../src/store'
import SearchInput from '../Search/SearchInput'
import { PdfPrint } from '../SchoolDetail/PdfPrint'
import exportFromJSON from 'export-from-json'

const drawerWidth = 240


const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
  },
  listItem: {
    color:  "white",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  listIcon: {
    color: "inherit"
  },
  info: {
    color: "darkgray",
    marginTop: 10
  }
}))

const SideDrawer = () => {
  const { drawerOpen, setDrawerOpen, currentSchool, onSearchPage } = useSchoolsContext()
  const classes = useStyles()
  const theme = useTheme()

  const downloadJSON = () => {
    exportFromJSON({ data: currentSchool || [], fileName: currentSchool?.school.name || "", exportType: "json" })
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <SearchInput />
      <Divider />
        <List>
        {onSearchPage && 
        <Typography align="center" className={classes.info} variant="body2">
          select a school to download data
        </Typography>
        }
          <PdfPrint classes={classes} onSearchPage={onSearchPage} /> {/* <-- ListItem */}
          <ListItem disabled={onSearchPage} className={classes.listItem} button>
            <ListItemIcon onClick={downloadJSON} className={classes.listIcon} > 
              <GetAppIcon />
            </ListItemIcon>
            <ListItemText onClick={downloadJSON} primary="{ JSON }" />
          </ListItem>

        </List>
      <Divider />
    </div>
  )

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden lgUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={drawerOpen}
            onClose={() => setDrawerOpen(!drawerOpen)}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
  )
}

export default SideDrawer

