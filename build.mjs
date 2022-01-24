import esbuild from '@netlify/esbuild'
import buildConfig from './buildConfig.mjs'

esbuild.build(buildConfig).catch((exception) => { 
  consle.error(exception)
  process.exit(1)
})
