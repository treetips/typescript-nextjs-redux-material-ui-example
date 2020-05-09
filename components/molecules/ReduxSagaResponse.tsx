import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

type Props = {
  responses: string[]
}

/**
 * redux-saga response component
 * @param props Props
 */
export const ReduxSagaResponse = function (props: Props) {
  const classes = useStyles(props)
  const { responses } = props
  return (
    <ul className={classes.root}>
      {responses.map((value: string, index: number) => (
        <li key={index}>
          [{String(index + 1).padStart(2, "0")}] {value}
        </li>
      ))}
    </ul>
  )
}
