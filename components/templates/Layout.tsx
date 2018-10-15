import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles"
import Head from "next/head"
import * as React from "react"
import { connect } from "react-redux"
import { Page } from "../../constants"
import { IInitialState } from "../../store/states"
import { ResponsiveDrawer } from "../organisms"

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
    },
  })

interface IProps extends WithStyles<typeof styles> {
  children: React.ReactNode
  selectedPage: Page
}

const LayoutComponent = (props: IProps) => {
  const { classes, children, selectedPage } = props
  return (
    <section className={classes.root}>
      <Head>
        <title>{selectedPage.title}</title>
      </Head>
      <ResponsiveDrawer>
        <article>{children}</article>
      </ResponsiveDrawer>
    </section>
  )
}

const mapStateToProps = (state: IInitialState) => ({
  selectedPage: state.page.selectedPage,
})

export const Layout = connect(
  mapStateToProps,
  undefined
)(withStyles(styles)(LayoutComponent as any))
