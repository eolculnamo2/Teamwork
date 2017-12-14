var React = require('react');
var ReactDOM = require('react-dom');

var Login = require('./components/authenticate');
var TeamManager = require('./components/teammates');
var Menu = require('./components/dashmenu');

if(document.getElementById('app')){
   ReactDOM.render(
 <Login />,
  document.getElementById('app'))
   }


else if(document.getElementById('team')){
  ReactDOM.render(
      <TeamManager />,
  document.getElementById('team')
)
}
