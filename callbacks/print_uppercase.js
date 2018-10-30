var httpHelpers = require('./http-functions');

function printUpperCase (html) {
    console.log(html.toUpperCase());
    // printUpperCase(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

httpHelpers.getHTML(requestOptions, function(data) {
  printLowerCase(data);
});