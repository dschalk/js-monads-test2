var path = require('path');

module.exports = {
  entry: {
    main: './test/test.js'
  },
  output: {
      path: __dirname,
      filename: "bundle.js",
  },
  module: {
    loaders: [
        {
            test:   /\.js/,
            loader: "babel?presets[]=es2015",
        }
    ],
    query: {
      presets: ['es2015', 'stage-2'],
    }
  }
}


