import React, { Component } from 'react';

class Auth extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  handleUpdateUsername(val){
    this.setState({
      username: val
    })
  }
  handleUpdatePassword(val){
    this.setState({
      password: val
    })
  }
  
  render() {
    return(
      <div>
        <div>
          <input placeholder='username' onChange={ e => this.handleUpdateUsername(e.target.value)}/>
          <input placeholder='password' onChange={ e => this.handleUpdatePassword(e.target.value)}/>
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    )
  }
}
export default Auth