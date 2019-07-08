import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Head from "next/head"
import * as React from "react"
import { useSelector } from "react-redux"
import { selectedPageSelector } from "../../store/page"
import { ResponsiveDrawer } from "../organisms"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      height: "100%",
    },
  })
)

type Props = {
  children: React.ReactNode
  className?: string
}

export const Layout = function(props: Props) {
  const { children, className } = props
  const classes = useStyles(props)
  const selectedPage = useSelector(selectedPageSelector)
  return (
    <section className={`${classes.root} ${className}`}>
      <Head>
        <title>{selectedPage.title}</title>
      </Head>
      <ResponsiveDrawer>
        <article>{children}</article>
      </ResponsiveDrawer>
    </section>
  )
}
