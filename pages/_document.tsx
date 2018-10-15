import Document, { Head, Main, NextScript } from "next/document"
import React from "react"
import JssProvider from "react-jss/lib/JssProvider"
import getPageContext from "../components/getPageContext"

interface IProps {
  pageContext: any
  pageProps: any
}

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
 */
class MyDocument extends Document<IProps> {
  static getInitialProps = ctx => {
    const pageContext = getPageContext()
    const page = ctx.renderPage(Component => props => (
      <JssProvider
        registry={pageContext.sheetsRegistry}
        generateClassName={pageContext.generateClassName}
      >
        <Component pageProps={pageContext} {...props} />
      </JssProvider>
    ))

    const pageProps = ctx.store.getState()
    return {
      ...page,
      pageContext,
      pageProps,
      styles: (
        <style
          id="jss-server-side"
          dangerouslySetInnerHTML={{
            __html: pageContext.sheetsRegistry.toString(),
          }}
        />
      ),
    }
  }

  render() {
    const { pageContext, pageProps } = this.props
    const page = pageProps.page.selectedPage

    return (
      <html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content={
              "user-scalable=0, initial-scale=1, " +
              "minimum-scale=1, width=device-width, height=device-height"
            }
          />
          <meta
            name="theme-color"
            content={pageContext.theme.palette.primary[500]}
          />
          <meta name="description" content={page.metaDescription} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
