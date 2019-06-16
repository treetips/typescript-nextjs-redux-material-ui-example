import { Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { IPagePayload, PageActions } from "../store/actions"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    mainContainer: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  })
)

function About() {
  const classes = useStyles({})
  return (
    <Layout>
      <HeaderArticleContainer>
        <Paper className={classes.mainContainer}>
          <Typography variant="h5">About page !!</Typography>
        </Paper>
      </HeaderArticleContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
About.getInitialProps = async ctx => {
  const pagePayload: IPagePayload = {
    selectedPage: Page.ABOUT,
  }
  ctx.store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
}

export default About
