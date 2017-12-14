var React = require('react');

var Menu = React.createClass({
  getInitialState: function(){
    return {menuProp: "addTeamMember"}
  },
  render: function(){
    return(
    <div>
   <h3 className = "dashboardTitle">
      Teamleader Dashboard
    </h3>
    <div className = "menu">
      <h4 className = "menuLink">
        Teammates
      </h4>
      <h4 className = "menuLink">
        Schedules
      </h4>
      <a className = "menuLink" href="/logout"><h4>
        Logout
      </h4>
      </a>
    </div>
      </div>)
  }
})

module.exports = Menu;