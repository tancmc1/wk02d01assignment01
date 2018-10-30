var httpHelpers = require('./http-functions');

function printReverse (html) {
    console.log(html.split('').reverse().join(''));
    // printUpperCase(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

httpHelpers.getHTML(requestOptions, function(data) {
  printReverse(data);
});