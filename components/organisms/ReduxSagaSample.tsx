import { Box, InputAdornment, TextField, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Create, Timer } from "@material-ui/icons"
import React, { useEffect, useState } from "react"
import { IReduxSagaState } from "../../store/redux-saga"
import { ReduxSagaResponse } from "../molecules"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      fontSize: "50px",
      marginBottom: theme.spacing(2),
    },
    subTitle: {
      fontSize: "35px",
    },
    section: {
      marginBottom: theme.spacing(4),
    },
  })
)

type Props = {
  title: string
  description?: React.ReactNode
  onChange: (inputValue: string) => void
  storeState?: IReduxSagaState
  responseResultMax: number
  interval: number
}

/**
 * redux-saga sample component
 * @param props {Props} props
 */
export const ReduxSagaSample = function (props: Props) {
  const {
    title,
    description,
    onChange,
    storeState,
    responseResultMax,
    interval,
  } = props
  const classes = useStyles(props)
  const [requestValue, setRequestValue] = useState<string>("")
  const [responseValues, setResponseValues] = useState<string[]>([])
  const [previousResponseValue, setPreviousResponseValue] = useState<string>("")

  useEffect(() => {
    if (!storeState?.timestamp) {
      return
    }
    const fetchResult = `${storeState.timestamp} - ${storeState.input}`
    if (fetchResult === previousResponseValue) {
      return
    }
    responseValues.unshift(fetchResult)
    if (responseValues && responseResultMax < responseValues.length) {
      responseValues.pop()
    }
    setResponseValues(responseValues)
    setPreviousResponseValue(fetchResult)
  }, [storeState?.timestamp])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || ""
    setRequestValue(value)
    onChange(value)
  }

  return (
    <>
      <Typography variant="h2" gutterBottom className={classes.title}>
        {title} with redux-saga
      </Typography>

      {description && <Box className={classes.section}>{description}</Box>}

      <Box className={classes.section}>
        <TextField
          value={interval}
          label="interval (milliseconds)"
          helperText="Edit constants/SagaSetting.ts"
          variant="filled"
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <Timer />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box className={classes.section}>
        <TextField
          value={requestValue}
          label="Fetch API every onChange"
          onChange={handleChangeInput}
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Create />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Typography variant="h3" gutterBottom className={classes.subTitle}>
        {title} response
      </Typography>

      <Box>
        {responseValues && <ReduxSagaResponse responses={responseValues} />}
      </Box>
    </>
  )
}
