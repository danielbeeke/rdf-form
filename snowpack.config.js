module.exports = {
  "scripts": {
    "mount:public": "mount public --to /",
    "mount:scss": "mount scss --to /css",
    "mount:ttl": "mount ttl --to /"
  },
  "plugins": [
    [
      "@snowpack/plugin-sass",
    ]
  ]
}
