var httpHelpers = require('./http-functions');

function printLowerCase (html) {
    console.log(html.toLowerCase());
    // printUpperCase(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

httpHelpers.getHTML(requestOptions, function(data) {
  printLowerCase(data);
});