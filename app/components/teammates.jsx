var React = require('react');
var Viewteam = require('./viewteam');

var Team = React.createClass({
  getInitialState:function(){
    return {team: "addTeamMember"}
  },
  addTeamMember: function(){
    return(
    <div>
      <div className = "leftSide">
      <Menu selector={this.state.menuProps}>
        {this.setState({team: this.props.selector})}
        </Menu>
      </div>
        <div className = "rightSide">
        <Viewteam/>
        </div>
      </div>) ;
  },
  render: function(){
    if(this.state.team === "addTeamMember"){
      return this.addTeamMember();
    }
  }
})

module.exports = Team;