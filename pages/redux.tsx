import {
  Avatar,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SpacingPaper } from "../components/atoms"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { CounterActions, IPagePayload, PageActions } from "../store/actions"
import { IInitialState } from "../store/states"

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

const countSelector = (state: IInitialState) => state.counter.count

function Redux() {
  const classes = useStyles({})
  const dispatch = useDispatch()
  const count = useSelector(countSelector)
  const [inputNumber, setInputNumber] = useState<number>(10)

  /**
   * Increment
   */
  const handleIncrement = () => dispatch(CounterActions.increment())

  /**
   * Decrement
   */
  const handleDecrement = () => dispatch(CounterActions.decrement())

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

  /**
   * Calculate input number
   */
  const handleCalculate = () => {
    dispatch(
      CounterActions.calculate({
        inputNumber: Number(inputNumber),
      })
    )
  }

  const CurrentNumber = () => (
    <Avatar className={classes.counter}>{count}</Avatar>
  )

  return (
    <Layout>
      <HeaderArticleContainer>
        <SpacingPaper>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Increment / Decrement
          </Typography>
          <CurrentNumber />
          <Button variant="contained" color="primary" onClick={handleIncrement}>
            + 1
          </Button>
          &nbsp;
          <Button variant="contained" color="primary" onClick={handleDecrement}>
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
              onClick={handleCalculate}
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
Redux.getInitialProps = async ctx => {
  const pagePayload: IPagePayload = {
    selectedPage: Page.REDUX,
  }
  ctx.store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
}

export default Redux
