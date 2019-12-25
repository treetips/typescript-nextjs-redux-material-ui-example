import {
  Avatar,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React, { useState } from "react"
import { AppContext } from "../components/AppContext"
import { SpacingPaper } from "../components/atoms"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { useCounter } from "../hooks"
import { IPagePayload, PageActions } from "../store/page"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    counter: {
      margin: 10,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    title: {
      fontSize: "2em",
    },
  })
)

type Props = {
  // passed from getInitialProps
  defaultInputNumber: number
}

function Redux(props: Props) {
  const { defaultInputNumber: defaultCount } = props
  const classes = useStyles(props)
  const [inputNumber, setInputNumber] = useState<number>(defaultCount)
  const { count, increment, decrement, calculate } = useCounter()

  /**
   * Change inputNumber value
   */
  const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    // ignore not number
    if (val.match(/^([1-9]|0)+[0-9]*$/i)) {
      setInputNumber(Number(val))
    }
  }

  const CurrentNumber = () => (
    <Avatar className={classes.counter}>{count}</Avatar>
  )

  return (
    <Layout className={classes.root}>
      <HeaderArticleContainer>
        <SpacingPaper>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Increment / Decrement
          </Typography>
          <CurrentNumber />
          <Button variant="contained" color="primary" onClick={increment}>
            + 1
          </Button>
          &nbsp;
          <Button variant="contained" color="primary" onClick={decrement}>
            - 1
          </Button>
        </SpacingPaper>

        <SpacingPaper>
          <FormControl>
            <Typography variant="h2" gutterBottom className={classes.title}>
              Calculate
            </Typography>

            <CurrentNumber />

            <TextField
              id="standard-name"
              label="Input number !!"
              value={inputNumber}
              onChange={handleChangeCount}
              margin="normal"
            />

            <Button
              variant="contained"
              color="primary"
              onClick={() => calculate(inputNumber)}
            >
              calculate
            </Button>
          </FormControl>
        </SpacingPaper>
      </HeaderArticleContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
Redux.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { store } = ctx

  const pagePayload: IPagePayload = {
    selectedPage: Page.REDUX,
  }
  store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
  return {
    defaultInputNumber: 2,
  }
}

export default Redux
