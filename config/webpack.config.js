const path = require('path');
const generate = require('./generateEntry');

generate();
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "../"),
    filename: 'index.min.js',
    library: "__DOM",
  },
  resolve: {
    extensions: ['.js']
  },
  module: {}
};