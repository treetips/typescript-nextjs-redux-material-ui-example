// https://github.com/soulmachine/with-react-intl/blob/master/src/%40types/window.d.ts
declare interface Window {
  ReactIntlLocaleData: {
    [index: string]: ReactIntl.Locale | ReactIntl.Locale[]
  }
  __NEXT_DATA__: {
    props: {
      locale: ReactIntl.Locale
      messages: object
      antdLocale: object
      now: Date
    }
  }
}
