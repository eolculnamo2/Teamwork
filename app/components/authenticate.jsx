var React = require('react');

var Login = React.createClass({
  getInitialState: function(){
    return {login: false, register: false, home: true}
  },
  home: function(){
    return(
      <div>
    <button onClick = {()=>{this.setState({
            login:true, register: false, home: false})
                           }} className = "loginButton">
    Login
    </button>
    <button onClick = {()=>{this.setState({
            login:false, register: true, home: false})
                           }} className = "loginButton">
    New Team
    </button>
      </div>
)
  },
  login: function(){
    return(
    <div>
      <form method = "POST" action = "/login">
        <input placeholder = "username" name = "username" /><br/>
        <input placeholder = "password" type = "password" name = "password"/><br/>
        <button onClick = {()=>{
            this.setState({login:false, register: false, home: true})
          }} className = "loginButton" type = "button">
          Back
        </button>
        <button className = "loginButton" type = "submit">
          Login
        </button>
        </form>
      </div>)
  },
  register: function(){
    return(
    <div>
      <form method = "POST" action = "/newTeam">
        <input placeholder = "Team Name" name = "teamName" /><br/>
        <input placeholder = "Your username" name = "username" /><br/>
        <input placeholder = "Your password" type = "password" name = "password"/><br/>
        <input placeholder = "Confirm password" type = "password" name = "confirmPassword"/><br/>
        <button onClick = {()=>{this.setState({
            login:false, register: false, home: true})
                               }} className = "loginButton" type = "button">
          Back
        </button>
        <button className = "loginButton" type = "submit">
          Register
        </button>
        </form>
      </div>)
  },
  render: function(){
    if(this.state.home){
       return this.home()
    }
    else if(this.state.login){
       return this.login()
    }
    else if(this.state.register){
       return this.register()
    }
  }
})

module.exports = Login;