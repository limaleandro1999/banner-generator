const fs = require('fs');
const path = require('path');
const resolve = require('path').resolve;

const pdf = require('pdf-creator-node');
const PDF2Pic = require('pdf2pic');
const readline = require('readline-promise').default;

module.exports = {
  generatePdf,
  convertPdfToPng,
  convertCsvFileToJson,
  createBanner,
};

async function createBanner(csvPath, templatePath, assetsPath) {
  const bannerDataArray = await convertCsvFileToJson(csvPath);
  let count = 1;

  for (const bannerData of bannerDataArray) {
    const options = {
      options: {
        width: '860px',
        height: '980px',  
        orientation: 'portrait',
        base: assetsPath ? `file:///${resolve(assetsPath)}` : undefined,
      },
      document: {
        data: bannerData,
        path: 'tmp/output.pdf',
      }
    };

    const imageOptions = {
      density: 100,         
      savename: `output${count++}`, 
      savedir: './images',  
      format: 'png',        
      size: '600x600'       
    };

    const filename = await generatePdf(templatePath, options);
    convertPdfToPng(filename, imageOptions);
  }
}

async function generatePdf(templatePath, info) {
  const template = fs.readFileSync(templatePath, 'utf-8');
  const { 
    document,
    options,
  } = info;

  document.html = template;

  const filename = (await pdf.create(document, options)).filename;

  return filename;
}

function convertPdfToPng(pdfPath, options) {
  const pdf2pic = new PDF2Pic(options);

  return pdf2pic.convert(pdfPath);
}

async function convertCsvFileToJson(csvPath) {
  const rlp = readline.createInterface({
    terminal: false,
    input: fs.createReadStream(csvPath),
  });

  const data = [];
  let headers;

  await rlp.forEach((line, index) => {
    if (index === 0) {
      headers = line.split(',');

      return;
    }
    
    data.push(parseLineToJson(line, headers));
  });
  
  return data;
}

function parseLineToJson(line = [], headers = []) {
  const lineJson = {};

  line.split(',').forEach((colunm, colunmIndex) => lineJson[headers[colunmIndex]] = colunm);

  return lineJson;
}