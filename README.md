# ⚠️ Archived
This repo is not maintained, I would encourage not using it.

This proof of concept demonstrates using Google's closure library in the CommonJS
ecosystem. It uses a custom babel plugin so that instead of having to do

```
goog.require('goog.array')
```

You can now require any goog module the CommonJS way.
```
var array = require('goog.array')
```

It uses React's jsx plugin with a pragma option set so that it works with the `goog.dom.DomHelper` class instead. Which means JSX can be used with any UI component.

It uses the `webpack-closure-compiler` plugin to build the app with the
closure compiler in production.

To start the app run `npm start`, to build the app run `npm run build`.
  
# Limitations
  - Doesn't yet work with ES6 modules import/export
