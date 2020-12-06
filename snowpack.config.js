const globImporter = require('node-sass-glob-importer');

module.exports = {
  "scripts": {
    "mount:html": "mount html --to /",
    "mount:public": "mount public --to /",
    "mount:src": "mount src --to /",
    "mount:scss": "mount scss --to /css"
  },
  "plugins": [
    [
      "@snowpack/plugin-sass",
      {
        importer: globImporter()
      }
    ]
  ]
}
