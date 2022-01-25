import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss'
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './src/index.ts',
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs({
      include: /node_modules/,
    }),
    scss()
  ],
  
  output: {
    esModule: true,
    file: './esm/index.js',
    name: 'RdfForm'
  }
};
