import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { AppContext } from "../components/AppContext"
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

interface IProps {
  httpStatusCode: number
}

function Error(props: IProps) {
  const { httpStatusCode } = props
  const classes = useStyles(props)
  return (
    <Layout>
      <HeaderArticleContainer>
        <SpacingPaper>
          <Typography variant="h5">
            Http status code {httpStatusCode} error !
          </Typography>
        </SpacingPaper>
      </HeaderArticleContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
Error.getInitialProps = async (ctx: AppContext): Promise<IProps> => {
  const pagePayload: IPagePayload = {
    selectedPage: Page.ERROR,
  }
  ctx.store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
  return {
    httpStatusCode: ctx.res.statusCode,
  }
}

export default Error
