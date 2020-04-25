import { Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { usePage } from "../../hooks"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(2),
      textAlign: "center",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: "3em",
      padding: theme.spacing(2),
    },
    description: {},
  })
)

type Props = {}

/**
 * Page header component
 * @param props Props
 */
export const PageHeader = function (props: Props) {
  const classes = useStyles(props)
  const { selectedPage } = usePage()

  return (
    <Paper square={true} className={classes.root}>
      <Typography variant="h1" color="inherit" className={classes.title}>
        {selectedPage.pageTitle}
      </Typography>
      <Typography
        variant="subtitle1"
        color="inherit"
        className={classes.description}
      >
        {selectedPage.metaDescription}
      </Typography>
    </Paper>
  )
}
