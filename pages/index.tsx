import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { SpacingPaper } from "../components/atoms"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

function Index() {
  const classes = useStyles({})
  return (
    <Layout className={classes.root}>
      <HeaderArticleContainer>
        <SpacingPaper>
          <Typography variant="h5">Hello Next.js 👋</Typography>
        </SpacingPaper>

        <SpacingPaper noPadding>
          <Typography variant="h5">zero padding paper</Typography>
          <Typography variant="h6">
            This component use makeStyles refer to Theme and Props.
          </Typography>
        </SpacingPaper>
      </HeaderArticleContainer>
    </Layout>
  )
}

export default Index
