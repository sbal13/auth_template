import React from 'react'

function withAuth(Component){
  return class extends React.Component{
    render(){
      return this.props.loggedIn ? <Component {...this.props}/> : <h1>LOADING</h1>
    }
  }
}

export default withAuth