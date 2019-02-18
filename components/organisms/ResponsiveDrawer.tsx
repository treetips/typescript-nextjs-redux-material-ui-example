import { AppBar, Drawer, Hidden, Toolbar, Typography } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import React from "react"
import { connect } from "react-redux"
import { Page } from "../../constants"
import { IInitialState } from "../../store/states"
import { Sidenavi } from "../organisms"

const drawerWidth = 290

const styles = (theme: Theme) =>
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

interface IProps extends WithStyles<typeof styles> {
  children: React.ReactNode
  selectedPage: Page
}

interface IState {
  mobileOpen: boolean
}

/**
 * Responsive drawer
 * @see https://material-ui.com/demos/drawers/#responsive-drawer
 */
class ResponsiveDrawerComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      mobileOpen: false,
    }
  }

  /**
   * Toggle drawer
   */
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  render() {
    const { classes, children, selectedPage } = this.props

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
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
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
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
}

const mapStateToProps = (state: IInitialState) => ({
  selectedPage: state.page.selectedPage,
})

export const ResponsiveDrawer = withStyles(styles)(
  connect(
    mapStateToProps,
    undefined
  )(ResponsiveDrawerComponent as any)
)
