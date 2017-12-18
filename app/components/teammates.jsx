var React = require('react');
var Viewteam = require('./viewteam');
var Menu = require('./dashmenu');
var Settings = require('./settings');
var ScheduleInterface = require('./schedInterface.jsx');

var Team = React.createClass({
  getInitialState:function(){
    return {team: "addTeamMember"}
  },
  menuCallback: function(x){
    this.setState({team: x});
  },
  viewSchedules: function(){
    return(
    <div>
      <ScheduleInterface selector={this.menuCallback} />
      </div>)
  },
  addTeamMember: function(){
    return(
    <div>
      <div className = "leftSide">
      <Menu selector={this.menuCallback}/>
      </div>
        <div className = "rightSide">
        <Viewteam/>
        </div>
      </div>) ;
  },
  settings: function(){
    return(
    <div>
      <div className = "leftSide">
      <Menu selector={this.menuCallback}/>
      </div>
        <div className = "rightSide">
        <Settings />
        </div>
      </div>) ;
  },
  render: function(){
    if(this.state.team === "addTeamMember"){
      return this.addTeamMember();
    }
    else if(this.state.team === "viewSchedules"){
      return this.viewSchedules();
    }
    else if(this.state.team === "settings"){
      return this.settings();
    }
  }
})

module.exports = Team;