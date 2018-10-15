import green from "@material-ui/core/colors/green"
import grey from "@material-ui/core/colors/grey"

/**
 * material-ui theme color pallete
 * @see https://material-ui.com/style/color/
 */
export const palette = {
  typography: {
    // https://material-ui.com/style/typography/#strategies
    useNextVariants: true,
  },
  primary: {
    light: grey[700],
    main: grey[800],
    dark: grey[900],
  },
  secondary: {
    light: green[300],
    main: green[500],
    dark: green[700],
  },
}
