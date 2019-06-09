import { Paper, Typography } from "@material-ui/core"
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    mainContainer: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  })

interface IProps extends WithStyles<typeof styles> {}

const Index = (props: IProps) => {
  const { classes } = props
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

export default withStyles(styles)(Index)
