/* eslint-disable no-console */
import includePaths from 'rollup-plugin-includepaths';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import svgr from '@svgr/rollup';

const fs = require('fs');
const sass = require('sass');
const path = require('path');

const includePathOptions = {
  include: {},
  paths: ['src'],
  external: [],
  extensions: ['.js', '.jsx', '.json', '.scss', '.svg'],
};
/**
 * This is required to generate the custom bootstrap css
 * that would be imported by other projects
 */
sass.render(
  {
    file: './src/styles/custom-bootstrap.scss',
    outputStyle: 'compressed',
    outFile: './src/styles/bootstrap.css',
    sourceMap: true, // or an absolute or relative (to outFile) path
    includedFiles: ['./src'],
    importer: (url) => {
      if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
      }

      return { file: url };
    },
  },
  (error, result) => {
    // node-style callback from v3.0.0 onwards
    if (!error) {
      if (!fs.existsSync(path.join(__dirname, '/build'))) {
        fs.mkdirSync(path.join(__dirname, '/build'));
      }
      fs.writeFile(
        path.join(__dirname, '/build/bootstrap.css'),
        result.css,
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log(error.status); // used to be "code" in v2x and below
      console.log(error.column);
      console.log(error.message);
      console.log(error.line);
    }
  }
);

const packageJson = require('./package.json');

const extensions = ['.js', '.jsx'];

const plugins = [
  peerDepsExternal(),
  includePaths(includePathOptions),
  resolve({ extensions }),
  commonjs(),
  image(),
  json(),
  postcss({
    use: [
      [
        'sass',
        {
          includePaths: [path.resolve(__dirname, 'src/styles')],
        },
      ],
    ],
  }),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
    plugins: ['@babel/plugin-proposal-class-properties'],
  }),
  svgr({
    svgoConfig: {
      plugins: {
        removeViewBox: false,
      },
    },
  }),
];

export default [
  {
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
      ...plugins,
      copy({
        targets: [
          {
            src: 'src/styles/fonts.css',
            dest: 'build',
            rename: 'fonts.css',
          },
          {
            src: 'src/styles/fonts',
            dest: 'build/',
          },
          {
            src: 'src/icons',
            dest: 'build/',
          },
          {
            src: 'src/styles/_colors.scss',
            dest: 'build/styles',
          },
          {
            src: 'src/styles/mixins/_fonts.scss',
            dest: 'build/styles/mixins',
          },
        ],
      }),
    ],
  },
];
