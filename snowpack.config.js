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
}
