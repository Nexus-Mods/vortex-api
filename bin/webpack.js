const fs = require('fs');
const path = require('path');
let ForkTsCheckerWebpackPlugin;
try {
  ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
} catch (err) {
  // nop
}

function externalsDirect() {
  return [
    'bluebird',
    'electron',
    'exe-version',
    'ffi',
    'fs',
    'fs-extra',
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
    'react-select',
    'redux-act',
    'ref',
    'request',
    'semver',
    'semvish',
    'turbowalk',
    'util',
    'vortex-api',
    'vortex-parse-ini',
    'winapi-bindings',
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

function output(moduleName, basePath, version) {
  const res = {
    libraryTarget: 'commonjs2',
    filename: 'index.js',
    sourceMapFilename: `${moduleName}.js.map`,
    path: path.resolve(basePath, 'dist'),
  };

  if (version < 5) {
    res['library'] = moduleName;
  }

  return res;
}

function loaders(version) {
  const transpileOnly = (ForkTsCheckerWebpackPlugin === undefined)
                      || (process.env['BUILD_QUICK_AND_DIRTY'] !== undefined);
  const res = [
    {test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/, options: {
      transpileOnly
    } },
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
    output: output(moduleName, basePath, version),
    module: (version === undefined) || (version < 4) ? {
      loaders: loaders(version),
    } : {
      rules: loaders(version),
    },
    plugins: [],
    resolve: {extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']},
    devtool: 'source-map',
    externals: externals(),
  };

  if ((ForkTsCheckerWebpackPlugin !== undefined)
      && (process.env['BUILD_QUICK_AND_DIRTY'] === undefined)) {
    res.plugins.push(new ForkTsCheckerWebpackPlugin());
  }

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
