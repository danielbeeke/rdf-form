const scss = require('rollup-plugin-scss');
const fg = require('fast-glob');

function scssWatchPlugin(options = {}) {
  return {
    name: 'scss-watch',
    async transform(code, id) {
      if (!id.includes('/rdf-form.scss')) return

      const files = await fg('./src/scss/**/*');
      const dependencies = files.filter(file => file !== './scss/rdf-form.scss')
      .map(dep => dep.replace('src/scss/', ''))

      return { code, dependencies, map: { mappings: '' } }
    }
  };
}


module.exports = {
  rollup: function (config, options) {
    config.plugins.push(scss({ output: false }));
    config.plugins.push(scssWatchPlugin())
    return config;
  },
};