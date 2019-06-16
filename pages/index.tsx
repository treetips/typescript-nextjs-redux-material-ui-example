import { Paper, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    mainContainer: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  })
)

function Index() {
  const classes = useStyles({})
  return (
    <Layout>
      <HeaderArticleContainer>
        <Paper className={classes.mainContainer}>
          <Typography variant="h5">Hello Next.js 👋</Typography>
        </Paper>
      </HeaderArticleContainer>
    </Layout>
  )
}

export default Index
