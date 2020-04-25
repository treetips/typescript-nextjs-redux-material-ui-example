import { ServerStyleSheets } from "@material-ui/styles"
import Document, { Head, Main, NextScript } from "next/document"
import React from "react"
import flush from "styled-jsx/server"
import { AppContext } from "../components/AppContext"
import { MuiTheme } from "../components/MuiTheme"

type Props = {
  pageProps: any
}

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_document.tsx
 */
class MyDocument extends Document<Props> {
  static getInitialProps = async (ctx: AppContext): Promise<any> => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets()

    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)

    const pageProps = ctx.store.getState()
    return {
      ...initialProps,
      pageProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <>
          {sheets.getStyleElement()}
          {flush() || null}
        </>
      ),
    }
  }

  render() {
    const { pageProps } = this.props
    const page = pageProps.page.selectedPage

    return (
      <html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={MuiTheme.palette.primary.main} />
          <meta name="description" content={page.metaDescription} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
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
