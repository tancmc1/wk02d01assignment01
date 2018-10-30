var getHTML = require('./http-functions');
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


function printHTML (dataStream) {
  console.log(dataStream + "\n");
}

getHTML(requestOptions, printHTML);