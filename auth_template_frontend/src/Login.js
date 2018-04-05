import React from 'react'
import {logIn} from './actions'
import {connect} from 'react-redux'

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event)=> {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.logIn(this.state.username, this.state.password, this.props.history)
  }

  render(){
    return (
      <div>
        <input name="username" value={this.state.username} onChange={this.handleChange}/>
        <input name="password" value={this.state.password} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Log In!</button>
      </div>
    )
  }
}

export default connect(null, {logIn})(Login)