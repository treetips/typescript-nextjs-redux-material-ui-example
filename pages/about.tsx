import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { SpacingPaper } from "../components/atoms"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { IPagePayload, PageActions } from "../store/page"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
)

function About() {
  const classes = useStyles({})
  return (
    <Layout>
      <HeaderArticleContainer>
        <SpacingPaper>
          <Typography variant="h5">About page !!</Typography>
        </SpacingPaper>
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
