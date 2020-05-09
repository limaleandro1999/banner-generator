const { program } = require('commander');

const { createBanner } = require('./utils');

program.version('0.0.1');

program
  .requiredOption('-t, --template <path>', 'path to the html template')
  .requiredOption('-c, --csv <path>', 'path to the csv file')
  .option('-a, --assets <path>', 'path to the assets foldes')
  
program.parse(process.argv);

const {
  template: templatePath,
  csv: csvPath,
  assets: assetsFolder
} = program;

if (templatePath.slice(-4) !== 'html') {
  throw Error('Template should be a html file')
}

if (csvPath.slice(-3) !== 'csv') {
  throw Error('Template should be a csv file')
}

createBanner(csvPath, templatePath, assetsFolder);