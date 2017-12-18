var React = require('react');

class ScheduleInterface extends React.Component{
  constructor(){
    super()
    this.state = {}
  };
  changeParentState(x){
    //this sends x as a callback to the parent in teammates.jsx.. Similar to menu
    this.props.selector(x);
  }
  interface(){
    return(
    <div>
      <h4 className="inline">
        Scheduler
        </h4>
        
      </div>)
  }
  userList(){
    return(
      <div>
       <h3 className = "dashboardTitle">Teamleader Dashboard</h3>
        <div className="menu">
       <h4 className="menuLink" onClick={()=>{this.changeParentState("addTeamMember")}}>Back</h4>
       </div>
      </div>)
  }
  render(){
    return(
      <div>
        
      <div className="leftSide">
        {this.userList()}
      </div>
        <div className="rightSide">
        </div>
      </div>
        )
  }
}

module.exports = ScheduleInterface;