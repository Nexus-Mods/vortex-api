const fs = require('fs');
const path = require('path');

function externalsDirect() {
  return [
    'bluebird',
    'electron',
    'exe-version',
    'ffi',
    'fs',
    'fs-extra-promise',
    'immutability-helper',
    'lodash',
    'minimatch',
    'modmeta-db',
    'nbind',
    'net',
    'node',
    'path',
    'react',
    'react-bootstrap',
    'react-dnd',
    'react-dnd-html5-backend',
    'react-dom',
    'react-i18next',
    'react-layout-pane',
    'react-redux',
    'redux-act',
    'ref',
    'request',
    'semver',
    'semvish',
    'util',
    'vortex-api',
    'vortex-parse-ini',
    'winreg',
    'winston',
  ].reduce((prev, key) => {
    prev[key] = key;
    return prev;
  }, {});
}

function externals() {
  return Object.assign({}, 
    externalsDirect(),
  );
}

function output(moduleName, basePath) {
  return {
    libraryTarget: 'commonjs2',
    library: moduleName,
    filename: 'index.js',
    sourceMapFilename: `${moduleName}.js.map`,
    path: path.resolve(basePath, 'dist'),
  };
}

function loaders() {
  return [
    {test: /\.tsx?$/, loader: 'ts-loader' },
    {test: /\.json$/, loader: 'json-loader'},
  ];
}

function config(moduleName, basePath) {
  let tsx = true;
  try {
    fs.statSync('./src/index.tsx');
  } catch (err) {
    tsx = false;
  }
  return {
    entry: tsx ? './src/index.tsx' : './src/index.ts',
    target: 'electron-renderer',
    node: {__filename: false, __dirname: false},
    output: output(moduleName, basePath),
    module: {
      loaders: loaders(),
    },
    resolve: {extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']},
    devtool: 'source-map',
    externals: externals(),
  };
}

module.exports = {
  externals,
  loaders,
  output,
  default: config,
}
