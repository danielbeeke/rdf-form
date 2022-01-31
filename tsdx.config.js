const scss = require('rollup-plugin-scss');
const fg = require('fast-glob');

module.exports = {
  rollup: function (config, options) {
    config.plugins.push(scss({ output: false }));

    config.plugins.push({
      name: 'watch-external',
      async buildStart() {
          const files = await fg('./scss/**/*');
          for(let file of files) this.addWatchFile(file);
      }
  })

    return config;
  },
};