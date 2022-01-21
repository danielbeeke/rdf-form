export default {
  mount: {
    src: "/",
    html: "/",
    scss: "/css",
    ttl: "/"
  },
  devOptions: {
    port: 8070,
    secure: true
  },
  plugins: [
    ["./scss-plugin.cjs", {}]
  ],
  optimize: {
    bundle: true,
    minify: false,
    target: 'es2020',
    treeshake: true,
    entrypoints: ['js/RdfForm.js']
  },
}
