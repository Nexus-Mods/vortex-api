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

function loaders(version) {
  const res = [
    {test: /\.tsx?$/, loader: 'ts-loader' },
  ];
  if (version < 4) {
    res.push({test: /\.json$/, loader: 'json-loader'});
  }
  return res;
}

function config(moduleName, basePath, version) {
  let tsx = true;
  try {
    fs.statSync('./src/index.tsx');
  } catch (err) {
    tsx = false;
  }
  const res = {
    entry: tsx ? './src/index.tsx' : './src/index.ts',
    target: 'electron-renderer',
    node: {__filename: false, __dirname: false},
    output: output(moduleName, basePath),
    module: (version === undefined) || (version < 4) ? {
      loaders: loaders(version),
    } : {
      rules: loaders(version),
    },
    resolve: {extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']},
    devtool: 'source-map',
    externals: externals(),
  };

  if (version >= 4) {
    res['mode'] = process.env.TARGET_ENV || 'development';
  }

  return res;
}

module.exports = {
  externals,
  loaders,
  output,
  default: config,
}
