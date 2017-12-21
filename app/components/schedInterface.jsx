var React = require('react');

class ScheduleInterface extends React.Component{
  constructor(){
    super()
    this.state = {
    selectedUser: "",
    hoursThisWeek: 0
    }
  };
  changeParentState(x){
    //this sends x as a callback to the parent in teammates.jsx.. Similar to menu
    this.props.selector(x);
  }
  userData(){
  if(this.state.selectedUser.length>0){
             return (<div>
               <h4>{this.state.selectedUser + "'s"} hours this week: {this.state.hoursThisWeek}</h4>
               <h4>{this.state.selectedUser + "'s"} preferred number of hours: 25</h4>
               </div>)
               }
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
       <div className="selectedUser">
        <h1 className="inline">
          {this.state.selectedUser}
        </h1>
         <div className="inline userData">
           {this.userData()}
         </div>
        </div>          
   </div>)
  }
  userList(){
    return(
      <div>
       <h3 className = "dashboardTitle">Teamleader Dashboard</h3>
        <div className="menu">
       <h4 className="menuLink" onClick={()=>{this.changeParentState("addTeamMember")}}>Back</h4>
          <hr/>
          {teamVar.map((x,i)=>{
          return(
          <div>
              <h4 key={"user"+i.toString()} className="menuLink" onClick = {()=>{this.setState({selectedUser: x.username})}}>{x.username}</h4>
              </div>
          )
          })  
            }
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