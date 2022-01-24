import { sassPlugin } from 'esbuild-sass-plugin'
import fs from 'fs'

const kebabize = str => {
  if (str.split('').every(letter => letter.toUpperCase() === letter)) return str.toLowerCase()
  return str.split('').map((letter, index) => {
    return letter.toUpperCase() === letter
     ? `${index !== 0 ? '-' : ''}${letter.toLowerCase()}`
     : letter;
  }).join('');
}


const createSet = (name, whitelist = [], blacklist = []) => {
  const elements = fs.readdirSync('./src/js/elements')
  .map(element => element.replace('.ts', ''))
  .filter(item => whitelist.length ? whitelist.includes(item) : true)
  .filter(item => !blacklist.includes(item))
  
  if (!elements.length) throw new Error(`No items are left after filtering: ${whitelist.join(', ')}`)

  const allElements = `
  ${elements.map(element => `import { ${element} } from './elements/${element}'`).join('\n')}
  
  export default {
  ${elements.map(element => `'${kebabize(element)}': ${element}`).join(',\n')}
  }
  `
  entryPoints.push(`./src/js/plugins.${name}.ts`)
  fs.writeFileSync(`./src/js/plugins.${name}.ts`, allElements)  
}

const entryPoints = [
  'src/js/RdfForm.ts'
]

createSet('all')
createSet('password', ['Password'])
createSet('uppy', ['UrlUppy'])
createSet('small', [], ['Password', 'UrlUppy'])

export default {
  entryPoints,
  bundle: true,
  format: 'esm',
  // external: ['uhtml'],
  outdir: 'build',
  sourcemap: true,
  splitting: true,
  plugins: [
    // {
    //   name: "dynamic-import-plugin",
    //   setup: (build) => {
    //     build.onDynamicImport({}, (args) => {

    //       if (args.importer.includes('i18n')) return

    //       console.log(args)

    //       return {
    //         contents: `
    //           import * as widgets from './allElements.js'
    //         `,
    //       };
    //     });
    //   },
    // },
    sassPlugin({
      type: "css-text",
    })
  ],
}