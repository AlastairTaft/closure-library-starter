const path = require('path');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const generateGoogWebpackAliases = require('./tools/generateGoogWebpackAliases')

// Make the paths relative to __dirname
//Object.keys(aliases).forEach(k => aliases[k] = path.resolve(__dirname, aliases[k]))

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ["./../../tools/babel-plugin/googPlugin"],
              ["transform-react-jsx", {
                "pragma": "this.dom_.createDom" // default pragma is React.createElement
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: process.emitWarning.NODE_ENV == 'production' ? [
    new ClosureCompilerPlugin({
    compiler: {
      jar: 'tools/closure-compiler/v20170910.jar', //optional 
      language_in: 'ECMASCRIPT_2017',
      language_out: 'ECMASCRIPT5',
      compilation_level: 'ADVANCED',
      isolation_mode: "IIFE",
      jscomp_off: "*",
      //continue_after_errors: true,
      assume_function_wrapper: true,
    },
    concurrency: 3,
  })] : [],
  resolve: {
    alias: generateGoogWebpackAliases(path.resolve(__dirname, 'src/goog')),
  },
};