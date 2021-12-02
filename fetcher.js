const request = require('request');
const fs = require('fs');

const { stdin: input, stdout: output } = require('process');

const args = process.argv.slice(2);
const cl_URL = args[0];
const cl_FilePath = args[1];

const downloadPage = (url, filePath) => {

  request(url, (error, response, body) => {
    if (error) throw error;
    else {
      console.log("body:", body);
      fs.writeFile(filePath, body, (error) => {
        if (error) throw error;
        var stats = fs.statSync(filePath);
        var fileSizeInBytes = stats.size;
        console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${filePath}`);
      });
    }
}); 
}

downloadPage(cl_URL, cl_FilePath);