import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import withRedux from "next-redux-wrapper"
import App from "next/app"
import React from "react"
import { Provider } from "react-redux"
import { MuiTheme } from "../components/MuiTheme"
import { configureStore } from "../store/configureStore"
import "../styles/main.css"

type Props = {
  Component: React.Component
  store: any
}

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_app.tsx
 */
class MyApp extends App<Props> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    jssStyles?.parentNode?.removeChild(jssStyles)
  }

  render() {
    const { store, Component, pageProps } = this.props

    return (
      <Provider store={store}>
        <ThemeProvider theme={MuiTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withRedux(configureStore, { debug: false })(MyApp)
