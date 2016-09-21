var path = require("path");
var webpack = require("webpack");
var port = 3003;

module.exports = {
  // cache: false,
  // devtool: 'eval',
  port: port,
  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    "./src/index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: 'bundle.js'
    // filename: "[name].js",
    // chunkFilename: "[chunkhash].js"
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
