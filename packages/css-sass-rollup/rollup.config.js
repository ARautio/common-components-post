import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'

const packageJson = require('./package.json')

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    copy({
      targets: [
        { src: 'src/theme.scss*', dest: 'dist/' },
        {
          src: ['src/components/**/*', '!**/*.spec.*'],
          dest: 'dist/components',
        },
      ],
      verbose: true,
      flatten: false,
    }),
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    postcss({
      extract: true,
      extensions: ['.scss'],
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
  ],
}
