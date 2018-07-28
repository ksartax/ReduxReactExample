var path = require('path');

module.exports = {
    entry: ["./public/js/index.js"],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'public/js/build')
    },
    devtool: "source-map",
    module: { 
      loaders: [
          {
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader', 
            query: {
                presets: ['react', 'es2015', 'stage-3'] 
            }
          }
      ]
    }
};
