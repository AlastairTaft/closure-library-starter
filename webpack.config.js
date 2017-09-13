const path = require('path');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ["transform-react-jsx", {
                "pragma": "DomHelper.createElement" // default pragma is React.createElement
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new ClosureCompilerPlugin({
      compiler: {
        jar: 'tools/closure-compiler/v20170910.jar', //optional 
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'ADVANCED'
      },
      concurrency: 3,
    })
  ],
};