const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const path = require('path')

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  stats: {
    colors: true
  },
  contentBase: path.join(__dirname, "build"),
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:3000');
});