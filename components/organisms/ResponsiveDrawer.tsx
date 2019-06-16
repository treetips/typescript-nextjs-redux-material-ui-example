import { AppBar, Drawer, Hidden, Toolbar, Typography } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { IInitialState } from "../../store/states"
import { Sidenavi } from "../organisms"

const drawerWidth = 290

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex",
      width: "100%",
    },
    appBar: {
      position: "absolute",
      marginLeft: drawerWidth,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    navIconHide: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      borderRightColor: theme.palette.primary.dark, // sidenavi border right
      [theme.breakpoints.up("md")]: {
        position: "relative",
      },
    },
    content: {
      flexGrow: 1,
    },
    title: {
      fontSize: 25,
    },
  })
)

interface IProps {
  children: React.ReactNode
}

const selectedPageSelector = (state: IInitialState) => state.page.selectedPage

/**
 * Responsive drawer
 * @see https://material-ui.com/demos/drawers/#responsive-drawer
 */
export const ResponsiveDrawer = function(props: IProps) {
  const { children } = props
  const classes = useStyles(props)
  const selectedPage = useSelector(selectedPageSelector)
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  /**
   * Toggle drawer
   */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h2"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {selectedPage.pageTitle}
          </Typography>
        </Toolbar>
      </AppBar>

      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Sidenavi />
        </Drawer>
      </Hidden>

      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Sidenavi />
        </Drawer>
      </Hidden>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}
