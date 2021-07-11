import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'
import PrintIcon from '@material-ui/icons/Print'
import GetAppIcon from '@material-ui/icons/GetApp'
import { makeStyles, useTheme } from '@material-ui/core'
import { useSchoolsContext } from '../../src/store'
import SearchInput from '../Search/SearchInput'
import CssBaseline from '@material-ui/core/CssBaseline'
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
  }
}))

const SideDrawer = () => {
  const { drawerOpen, setDrawerOpen, currentSchool, onSearchPage } = useSchoolsContext()
  const classes = useStyles(currentSchool)
  const theme = useTheme()

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <SearchInput />
      <Divider />
        <List>
          <ListItem disabled={onSearchPage} className={classes.listItem} button>
              <ListItemIcon className={classes.listIcon} > <PictureAsPdfIcon />
                </ListItemIcon>
              <ListItemText primary="PDF" />
            </ListItem>
            <ListItem disabled={onSearchPage} className={classes.listItem} button>
              <ListItemIcon className={classes.listIcon} > <GetAppIcon />
                </ListItemIcon>
              <ListItemText primary="{ JSON }" />
            </ListItem>
            <ListItem disabled={onSearchPage} className={classes.listItem} button>
              <ListItemIcon className={classes.listIcon} > <PrintIcon />
                </ListItemIcon>
              <ListItemText primary="Print" />
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

