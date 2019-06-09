import { Paper, Typography } from "@material-ui/core"
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles"
import autobind from "autobind-decorator"
import React from "react"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import { Action } from "typescript-fsa"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { IPagePayload, PageActions } from "../store/actions"

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    mainContainer: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  })

interface IProps extends WithStyles<typeof styles> {
  changePage: (pagePayload: IPagePayload) => void
}

interface IState {}

@autobind
class About extends React.Component<IProps, IState> {
  static getInitialProps = ctx => {
    const pagePayload: IPagePayload = {
      selectedPage: Page.ABOUT,
    }
    ctx.store.dispatch({
      type: PageActions.changePage.toString(),
      payload: pagePayload,
    })
  }

  constructor(props: IProps) {
    super(props)
  }

  render() {
    const { classes } = this.props
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
}

const mapDispatchToProps = (dispatch: Dispatch<Action<IPagePayload>>) =>
  bindActionCreators(PageActions, dispatch)

export default withStyles(styles)(
  connect(
    undefined,
    mapDispatchToProps
  )(About as any)
)
