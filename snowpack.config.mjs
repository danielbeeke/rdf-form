export default {
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
    bundle: false,
    minify: false,
    target: 'es2020',
    treeshake: false,
    entrypoints: ['js/RdfForm.js']
  },
}
