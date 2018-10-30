var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, function (response) {

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
};

function printHTML (dataStream) {
  console.log(dataStream + "\n");
}