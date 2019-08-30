import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import localResolve from 'rollup-plugin-local-resolve'
import filesize from 'rollup-plugin-filesize'
import globals from 'rollup-plugin-node-globals'
import builtins from 'rollup-plugin-node-builtins'

const plugins = [
  json(),
  globals(),
  builtins(),
  localResolve(),
  resolve({
    module: true,
    jsnext: true,
    main: true,
    preferBuiltins: true,
    browser: true,
    modulesOnly: true,
  }),
  commonjs(),
  babel({
    // runtimeHelpers: true,
    exclude: 'node_modules/**',
  }),
  filesize(),
]

export default {
  input: 'src/main.js',
  output: [
    {
      name:'fu',
      file: 'tmp/bundle.js',
      format: 'umd'
    },
    {
      name:'fu',
      file: 'tmp/bundle.cjs.js',
      format: 'cjs'
    },
    {
      name:'fu',
      file: 'tmp/bundle.es6.js',
      format: 'es'
    },
  ],
  plugins: plugins
}