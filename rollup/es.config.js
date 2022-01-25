import {nodeResolve} from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
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
    terser(),
    scss()
  ],
  
  output: {
    esModule: false,
    exports: 'named',
    file: './es.js',
    format: 'iife',
    name: 'RdfForm'
  }
};
