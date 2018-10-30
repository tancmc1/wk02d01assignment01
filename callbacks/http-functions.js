var https = require('https');

module.exports = {
  getHTML: function (options, callback) {
    https.get(options, function (response) {

      if  (response.statusCode !== 200) {
        console.log("Error loading page: ", response.statuscode);
      }

      response.setEncoding('utf8');

      var dataStream = "";

      response.on('data', function (data) {
        callback(dataStream += data);
      });

      response.on('end', function () {
        console.log("======== END OF DATA =======");
        // printHTML(dataStream);
      });

    });
  },

  printHTML: function (dataStream) {
    console.log(dataStream + "\n");
  }
};



