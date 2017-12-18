var React = require('react');

var Viewteam = React.createClass({
  getInitialState: function(){
    return {profile: teamVar[0].username}
  },
  profileFilter: function(){
    if(this.state.profile.length>0){
    var profileView = teamVar.filter((user)=>{
              return user.username == this.state.profile;
            });
  
    
    return(
    <div>
        <h3>Profile Information</h3>
        <div className="profileBg">
          <h4 className="underlined inline">Name:</h4>
        <h4>{profileView[0].username}</h4>
           <h4 className="underlined inline">Phone:</h4>
          <h4>{profileView[0].profileInfo[0].phone}</h4>
            <h4 className="underlined inline">Address:</h4>
        <h4>{profileView[0].profileInfo[0].email}</h4>
        </div>
      </div>)
        }
  },
  render: function(){
    return(
    <div>
        <div className="rows">
          <div className="col-md-4 center">
        <h3>
        Add Teammate
        </h3>
        <form method="POST" action="/addTeamMember">
          <input placeholder="Teammate Username" name="username"/><br/>
          <input placeholder="Teammate Password" name="password" type="password" /><br/>
          <input placeholder="Confirm Teammate Password" name="confirmPassword" type="password" /><br/>
        <button className = "loginButton" type = "submit">
          Register New Teammate
        </button>
        </form>
            </div>
          <div className="col-md-4 center">
            <h3>
              My Team
            </h3>
            {teamVar.map((x)=>{
              
              return(
                <div>
              <h4 className = "menuLink" onClick = {()=>{this.setState({profile: x.username})}}>
                {x.username}
              </h4>
                  </div>
                )
            })}
          </div>
          <div className="col-md-4 center">
            {this.profileFilter(this.state.profile)}
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Viewteam;