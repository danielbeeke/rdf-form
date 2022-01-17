const snowpackSass = require('@snowpack/plugin-sass')
const plugin = snowpackSass()
plugin.resolve.output = ['.js']
plugin.transform = async function (data) {
  if (data.id.includes('export.js')) {
    return 'export default `' + data.contents + '`'
  }
}
module.exports = () => plugin