/**
 * Webpack dev server config used by Jellyweb
 * docs can be found here https://webpack.js.org/configuration/dev-server/
 */
module.exports = {
  compress: true,
  clientLogLevel: 'none',
  hot: true,
  quiet: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 500
  },
  // proxy: {
  //   '*': {
  //     target: 'http://localhost:8090',
  //     // doesn't seem to be needed, but juest keep it here as a reference
  //     // bypass: (req, /* res, proxyOptions */) => { // eslint-disable-line consistent-return
  //     //   if (req.url.indexOf('app.js') !== -1) {
  //     //     return false
  //     //   }
  //     // }
  //   }
  // },
  // Enable HTTPS if the HTTPS environment variable is set to 'true'
  // https: protocol === 'https',
  host: 'localhost',

  // https://github.com/webpack/webpack-dev-server/releases/tag/v2.4.3
  // insecure, but works fine when in dev
  disableHostCheck: true,

  // access to express
  setup(app) {
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      next()
    })
  }
}