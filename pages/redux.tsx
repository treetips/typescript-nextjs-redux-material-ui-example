import {
  Avatar,
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core"
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
import {
  CounterActions,
  ICounterPayload,
  IPagePayload,
  PageActions,
} from "../store/actions"
import { IInitialState } from "../store/states"

interface IProps extends WithStyles<typeof styles> {
  count: number
  increment: () => number
  decrement: () => number
  calculate: (inputNumber: ICounterPayload) => number
  changePage: (pagePayload: IPagePayload) => void
}

interface IState {
  inputNumber: number
}

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    counter: {
      margin: 10,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    mainContainer: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
    title: {
      fontSize: "2em",
    },
  })

@autobind
class Redux extends React.Component<IProps, IState> {
  /**
   * Initialize server side rendering
   */
  static getInitialProps = ctx => {
    const pagePayload: IPagePayload = {
      selectedPage: Page.REDUX,
    }
    ctx.store.dispatch({
      type: PageActions.changePage.toString(),
      payload: pagePayload,
    })
  }

  constructor(props: IProps) {
    super(props)
    this.state = {
      inputNumber: 12,
    }
  }

  /**
   * Increment count
   */
  handleIncrement = () => this.props.increment()

  /**
   * Decrement count
   */
  handleDecrement = () => this.props.decrement()

  /**
   * Change inputNumber value
   */
  handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    // ignore not number
    if (val.match(/^([1-9]|0)+[0-9]*$/i)) {
      this.setState({ inputNumber: Number(val) })
    }
  }

  /**
   * Calculate input number
   */
  handleCalculate = () => {
    this.props.calculate({
      inputNumber: Number(this.state.inputNumber),
    })
  }

  render() {
    const { classes, count } = this.props
    const CurrentNumber = () => (
      <Avatar className={classes.counter}>{count}</Avatar>
    )
    return (
      <Layout>
        <HeaderArticleContainer>
          <Paper className={classes.mainContainer}>
            <Typography variant="h2" gutterBottom className={classes.title}>
              Increment / Decrement
            </Typography>
            <CurrentNumber />
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleIncrement}
            >
              + 1
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleDecrement}
            >
              - 1
            </Button>
          </Paper>
          <Paper className={classes.mainContainer}>
            <FormControl>
              <Typography variant="h2" gutterBottom className={classes.title}>
                Calculate
              </Typography>
              <CurrentNumber />
              <TextField
                id="standard-name"
                label="Input number !!"
                value={this.state.inputNumber}
                onChange={this.handleChangeCount}
                margin="normal"
              />

              <Button
                variant="contained"
                color="primary"
                onClick={this.handleCalculate}
              >
                calculate
              </Button>
            </FormControl>
          </Paper>
        </HeaderArticleContainer>
      </Layout>
    )
  }
}

const mapStateToProps = (state: IInitialState) => ({
  count: state.counter.count,
})

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) =>
  bindActionCreators(CounterActions, dispatch)

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Redux as any)
)
