const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');
const external = require('rollup-plugin-peer-deps-external');
const dts = require('rollup-plugin-dts').default;
const pkg = require('./package.json');

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      postcss({
        modules: true,
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/types',
        rootDir: 'src',
      }),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
