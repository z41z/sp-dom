const path = require('path');
const generate = require('./generateEntry');
const chalk = require('chalk');
generate();
console.log(chalk.yellow(new Date()));
console.log(chalk.green('Generate index.js successfully!'));
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "../"),
    filename: 'index.min.js',
    library: "_DOM",
  },
  resolve: {
    extensions: ['.js']
  },
  module: {}
};