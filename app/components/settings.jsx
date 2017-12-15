var React = require('react');

var Settings = React.createClass({
  getInitialState: function(){
    return {password: false}
  },
  password: function(){
    return(<div>
         <h3>
         Settings
         </h3>
        <form className = "center" method = "POST" action = "/changePassword"><br/>
        <input placeholder = "New Password" type = "password" name = "password"/><br/>
    <input placeholder = "Confirm Password" type = "password" name = "confirmPassword"/><br/>
          <button onClick = {()=>{this.setState({password:false})}} type = "button" className = "loginButton">
            Back
          </button>
          <button type = "submit" className = "loginButton">
            Change
          </button>
        </form>
      </div>)
    
  },
  settings: function(){
     return(<div>
         <h3>
         Settings
         </h3>
      <form className = "center" method = "POST" action = "/updateProfile"><br/>
        <input placeholder = "Contact Number" name = "contactNumber" /><br/>
        <input placeholder = "Email" name = "email" /><br/>
        <input placeholder = "Address" name = "address" /><br/>
         <button onClick = {()=>{this.setState({password:true})}} type = "button" className = "loginButton">
            Adjust Password
          </button>
          <button type = "submit" className = "loginButton">
            Submit Changes
          </button>
        </form>
      </div>)
  },
  render: function(){
   if(!this.state.password){
     return this.settings();
   }
   else if(this.state.password){
     return this.password();
   }
  }
})


module.exports = Settings;