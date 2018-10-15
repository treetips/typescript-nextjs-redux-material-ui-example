import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider } from "@material-ui/core/styles"
import withRedux from "next-redux-wrapper"
import App, { Container } from "next/app"
import React from "react"
import JssProvider from "react-jss/lib/JssProvider"
import { Provider } from "react-redux"
import getPageContext from "../components/getPageContext"
import { configureStore } from "../store/configureStore"
import "../styles/main.css"

interface IProps {
  Component: React.Component
  store: any
}

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
 */
class MyApp extends App<IProps> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
    return { pageProps: pageProps }
  }

  private pageContext = {
    theme: undefined,
    sheetsManager: undefined,
    sheetsRegistry: undefined,
    generateClassName: undefined,
  }

  constructor(props) {
    super(props)
    this.pageContext = getPageContext()
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          {/* Wrap every page in Jss and Theme providers */}
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
              <Component pageContext={this.pageContext} />
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore())(MyApp)
