var webpack = require("webpack")
webpack(require('./webpack.config.js'), function(err, stats) {
  if (err) throw err
  console.log(stats)
});