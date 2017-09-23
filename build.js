var webpack = require("webpack")
webpack(require('./webpack.config.js'), function(err, stats) {
  if (err || stats.hasErrors()) {
    throw err
  }
  console.log(stats.toString({
    colors: true,
  }))
});