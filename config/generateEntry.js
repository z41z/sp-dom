const fs = require('fs');
const path = require('path');
const resolvePath = require('./resolvePath');
const chalk = require('chalk');

const generate = () => {
  console.log(chalk.yellow(new Date()));
  let content = `/* generated By ./config/generate.js\n* ${new Date()}\n*/\n\n`;
  resolvePath.forEach(resolvePath => {
    fs.readdir(`${path.resolve(__dirname, `./../${resolvePath}`)}`, (err, files) => {
      files.forEach(file => {
        content += `module.exports.${file.substring(0,file.indexOf('.'))} = require('./${resolvePath}/${file}');\n`;
      });
      fs.writeFile(`${path.resolve(__dirname, "./../index.js")}`, content, () => {});
    });
  })
  console.log(chalk.green('Generate index.js successfully!'));
}
module.exports = generate;