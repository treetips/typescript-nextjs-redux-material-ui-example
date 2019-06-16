import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Head from "next/head"
import * as React from "react"
import { useSelector } from "react-redux"
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
}

const selectedPageSelector = (state: IInitialState) => state.page.selectedPage

export const Layout = function(props: IProps) {
  const { children } = props
  const classes = useStyles(props)
  const selectedPage = useSelector(selectedPageSelector)
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
