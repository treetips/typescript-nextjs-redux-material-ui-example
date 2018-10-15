import {
  createGenerateClassName,
  createMuiTheme,
} from "@material-ui/core/styles"
import { SheetsRegistry } from "jss"
import { palette } from "./MuiColorPalette"

// @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs/src/getPageContext.js

// A theme with custom primary and secondary color.
const theme = createMuiTheme({ palette: palette })

const createPageContext = () => {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  }
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
