var React = require('react');

var Menu = React.createClass({
  getInitialState: function(){
    return {menuProp: "addTeamMember"}
  },
  changeParentState: function(x){
    //this sends x as a callback to the parent in teammates.jsx
    this.props.selector(x);
  },
  render: function(){
    return(
    <div>
   <h3 className = "dashboardTitle">
      Teamleader Dashboard
    </h3>
    <div className = "menu">
      <h4 onClick = {()=>{this.changeParentState("addTeamMember")}}className = "menuLink">
        Teammates
      </h4>
      <h4 onClick = {()=>{this.changeParentState("viewSchedules")}} className = "menuLink">
        Schedules
      </h4>
      <h4 onClick = {()=>{this.changeParentState("settings")}} className = "menuLink">
        Settings
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