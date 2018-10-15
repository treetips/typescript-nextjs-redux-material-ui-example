// https://github.com/soulmachine/with-react-intl/blob/master/src/%40types/next.d.ts
declare module "next" {
  export interface Context {
    pathname: string
    query: string
    asPath: string
    req: {
      locale: string
      localeDataScript: string
      messages: object
      antdLocale: object
    }
    res?: object
    renderPage: (any) => object
  }
}
