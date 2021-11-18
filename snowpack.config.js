require('dotenv').config();

const cors_proxy = require('cors-anywhere').createServer({
  originWhitelist: [],
  removeHeaders: ['cookie', 'cookie2']
})

let apiProxy = (req, res) => {
  const proxiedUrl = 'https://' + req.url.substr(1)
  req.url = proxiedUrl
  console.log(proxiedUrl)
  
  if (proxiedUrl.includes('b2_authorize_account')) {
    req.headers['Authorization'] = 'Basic ' + btoa(process.env.B2_KEY_ID + ':' + process.env.B2_KEY_VALUE)
  }

  cors_proxy.emit('request', req, res);
}

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
  },
  routes: [
    {
      src: '/api.backblazeb2.com/b2api/v2/.*',
      dest: apiProxy,
    },
    {
      src: '/api003.backblazeb2.com/b2api/v2/.*',
      dest: apiProxy,
    },
  ],
}
