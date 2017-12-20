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
  week(){
    return(
    <div>
         <form method="POST" action="saveSchedule" target="hiddenFrame">
        <table>
          <tr>
    <th>Sunday</th>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
    <th>Saturday</th>
  </tr>
 
  <tr>
     <td><input name = "sunStart" placeholder="start" className="timeInput"/> <input name = "sunEnd" placeholder="end" className="timeInput"/></td>
     <td><input name = "monStart" className="timeInput"/> <input name = "sunEnd"  className="timeInput"/></td>
     <td><input name = "tueStart" className="timeInput"/> <input name = "sunEnd"  className="timeInput"/></td>
     <td><input name = "wedStart" className="timeInput"/> <input name = "sunEnd"  className="timeInput"/></td>
     <td><input name = "thuStart" className="timeInput"/> <input name = "sunEnd"  className="timeInput"/></td>
     <td><input name = "friStart" className="timeInput"/> <input name = "sunEnd"  className="timeInput"/></td>
     <td><input name = "satStart" className="timeInput"/> <input name = "sunEnd"  className="timeInput"/></td>
  </tr> 
  
        </table>
           <hr/>
     <button className = "saveButton" type = "submit">
    Save Changes
    </button>
             </form>
       
          
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
          <center>
            <h2 className="title2">Schedule</h2>
          </center>
          {this.week()}
        </div>
      </div>
        )
  }
}

module.exports = ScheduleInterface;