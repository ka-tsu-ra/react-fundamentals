// compiles es6 and jsx down to js
// launches developmenet server

// export a configuration object:
module.exports = {
  entry: './main.js', // entry-point
  output: {
    path: './', // path to output to is route path
    filename: 'index.js' // name of bundled file
  },
  devServer: {
    inline: true, // lets reload on the fly
    port: 3333, // any you want
  },
  module: {
    loaders: [
      {
        test: /\.js$/, //test for .js at the end of a file
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
