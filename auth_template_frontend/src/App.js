import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from './actions'

class App extends Component {
  componentDidMount(){
    let jwt = localStorage.getItem("token")

    if(jwt && !this.props.currentUser){
      this.props.getUser(jwt, this.props.history)
    }
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    loggedIn: state.loggedIn,
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, {getUser})(App));
