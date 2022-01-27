const scss = require('rollup-plugin-scss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      scss({
        output: false,
      })
    );
    return config;
  },
};