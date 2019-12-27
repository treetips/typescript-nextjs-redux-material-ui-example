const withCSS = require("@zeit/next-css")
const path = require("path")
const Dotenv = require("dotenv-webpack")

module.exports = withCSS({
  webpack: config => {
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ]
    return config
  },
})
