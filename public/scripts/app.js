'use strict';

console.log('app.js is running');

// JSX - JavaScript XML 
var template = React.createElement(
  P,
  null,
  'This JSX from app.js! '
);
var appRoot = document.getElementById('app');

// I love jesus 2
//I love jesus 3

ReactDOM.render(template, appRoot);
