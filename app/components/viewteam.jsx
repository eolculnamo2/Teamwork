var React = require('react');

var Viewteam = React.createClass({
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
              <h4>
                {x.username}
              </h4>
                  </div>
                )
            })}
           
          </div>
          <div className="col-md-4 center">
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Viewteam;