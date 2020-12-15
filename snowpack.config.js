module.exports = {
  "scripts": {
    "mount:public": "mount public --to /",
    "mount:scss": "mount scss --to /css"
  },
  "plugins": [
    [
      "@snowpack/plugin-sass",
    ]
  ]
}
