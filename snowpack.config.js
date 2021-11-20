require('dotenv').config();

const cors_proxy = require('cors-anywhere').createServer({
  removeHeaders: ['cookie', 'cookie2']
})

require('http').createServer(function(req, res) {
  if (req.url.includes('b2_authorize_account')) {
    req.headers = {
      'Authorization': 'Basic ' + btoa(process.env.B2_KEY_ID + ':' + process.env.B2_KEY_VALUE)
    }
  }
  cors_proxy.emit('request', req, res)

}).listen(8071, '0.0.0.0');


module.exports = {
  mount: {
    src: "/",
    html: "/",
    scss: "/css",
    ttl: "/"
  },
  devOptions: {
    port: 8070
  },
  plugins: [
    [
      "@snowpack/plugin-sass",
    ]
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2017',
    treeshake: true,
    entrypoints: ['js/RdfForm.js']
  }
}
