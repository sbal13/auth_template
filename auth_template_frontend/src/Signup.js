import React from 'react'
import {signUp} from './actions'
import {connect} from 'react-redux'

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    confirmation: ""
  }

  handleChange = (event)=> {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    if (this.state.password === this.state.confirmation){
      this.props.signUp(this.state.username, this.state.password, this.props.history)
    } else {
      alert("Passwords do not match!")
    }
  }

  render(){
    return (
      <div>
        <input name="username" value={this.state.username} onChange={this.handleChange}/>
        <input name="password" value={this.state.password} onChange={this.handleChange}/>
        <input name="confirmation" value={this.state.confirmation} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Sign up!</button>
      </div>
    )
  }
}

export default connect(null, {signUp})(Signup)