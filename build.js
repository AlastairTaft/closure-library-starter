var webpack = require("webpack")
webpack(require('./webpack.config.js'), function(err, stats) {
  if (err || stats.hasErrors()) {
    if (stats.hasErrors()){
      var errors = stats.compilation.errors
      errors.forEach((e, i) => {        
        if (i == errors.length - 1)
          throw e  
        console.error(e)
      })
    }
    throw err
  }
  console.log(stats.toString({
    colors: true,
  }))
});