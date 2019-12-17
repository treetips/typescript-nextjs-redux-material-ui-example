import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppContext } from "../components/AppContext"
import { SpacingPaper } from "../components/atoms"
import {
  HeaderArticleContainer,
  ReduxSagaSample,
} from "../components/organisms"
import { Layout } from "../components/templates"
import { Page, SagaSetting } from "../constants"
import { IPagePayload, PageActions } from "../store/page"
import {
  ReduxSagaActions,
  reduxSagaDebounceSelector,
  reduxSagaThrottleSelector,
} from "../store/redux-saga"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

type Props = {}

function ReduxSaga(props: Props) {
  const {} = props
  const classes = useStyles(props)
  const dispatch = useDispatch()
  const reduxSagaDebounceState = useSelector(reduxSagaDebounceSelector)
  const reduxSagaThrottleState = useSelector(reduxSagaThrottleSelector)

  const onDebounce = (inputValue: string) => {
    dispatch(
      ReduxSagaActions.fetchDebounce({
        input: inputValue,
      })
    )
  }

  const onThrottle = (inputValue: string) => {
    dispatch(
      ReduxSagaActions.fetchThrottle({
        input: inputValue,
      })
    )
  }

  return (
    <Layout className={classes.root}>
      <HeaderArticleContainer>
        <SpacingPaper>
          <ReduxSagaSample
            title="debounce"
            description={
              <>
                <Typography variant="subtitle1" gutterBottom>
                  Open DevTools of Google Chrome, open the network tab, and
                  check the execution frequency and timing of api.
                </Typography>
              </>
            }
            storeState={reduxSagaDebounceState}
            responseResultMax={10}
            interval={SagaSetting.DEBOUNCE_INTERVAL}
            onChange={onDebounce}
          />
        </SpacingPaper>

        <SpacingPaper>
          <ReduxSagaSample
            title="throttle"
            storeState={reduxSagaThrottleState}
            responseResultMax={10}
            interval={SagaSetting.THROTTLE_INTERVAL}
            onChange={onThrottle}
          />
        </SpacingPaper>
      </HeaderArticleContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
ReduxSaga.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { store } = ctx

  const pagePayload: IPagePayload = {
    selectedPage: Page.REDUX_SAGAA,
  }
  store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
  return {}
}

export default ReduxSaga
