var React = require('react');
var ReactDOM = require('react-dom')

var Login = require('./components/authenticate')

var application = ReactDOM.render(
 <Login />,
  document.getElementById('app'))
