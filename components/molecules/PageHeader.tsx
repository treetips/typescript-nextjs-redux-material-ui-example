import { Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { connect } from "react-redux"
import { Page } from "../../constants"
import { IInitialState } from "../../store/states"

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

interface IProps {
  /**
   * from redux
   */
  selectedPage?: Page
}

/**
 * Page header component
 * @param props IProps
 */
const PageHeaderComponent = (props: IProps) => {
  const { selectedPage } = props
  const classes = useStyles(props)
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

const mapStateToProps = (state: IInitialState) => ({
  selectedPage: state.page.selectedPage,
})

export const PageHeader = connect(
  mapStateToProps,
  undefined
)(PageHeaderComponent as any)
