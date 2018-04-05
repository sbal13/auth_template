import React from 'react'
import {connect} from 'react-redux'
import withAuth from './withAuth'

class Home extends React.Component {
  componentDidMount(){
    if(!this.props.currentUser){
      this.props.history.push("/login")
    }
  }

  render(){
    return (
      <div>
        <h1>Home!</h1>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(withAuth(Home))