var https = require('https');



function getHTML (options, callback) {
  https.get(requestOptions, function (response) {

    if  (response.statusCode !== 200) {
      console.log("Error loading page: ", response.statuscode);
    }

    response.setEncoding('utf8');

    var dataStream = [];

    response.on('data', function (data) {
      dataStream.push(data);
    });

    response.on('end', function () {
      return printHTML(dataStream);
    });

  });
}

function printHTML (dataStream) {
  console.log(dataStream + "\n");
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);