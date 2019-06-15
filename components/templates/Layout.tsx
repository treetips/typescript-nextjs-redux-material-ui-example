import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Head from "next/head"
import * as React from "react"
import { connect } from "react-redux"
import { Page } from "../../constants"
import { IInitialState } from "../../store/states"
import { ResponsiveDrawer } from "../organisms"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
    },
  })
)

interface IProps {
  children: React.ReactNode
  selectedPage: Page
}

const LayoutComponent = (props: IProps) => {
  const { children, selectedPage } = props
  const classes = useStyles(props)
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
)(LayoutComponent as any)
