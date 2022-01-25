import {nodeResolve} from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss'
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './esm/RdfForm.ts',
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      presets: ['@babel/preset-env'],
      exclude: "transform-typeof-symbol",
      babelHelpers: 'bundled'
    }),
    scss({ output: false})
  ],
  
  output: {
    esModule: false,
    exports: 'named',
    file: './index.js',
    format: 'iife',
    name: 'RdfForm'
  }
};
