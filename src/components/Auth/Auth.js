import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from './../../ducks/reducer'

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
  login = async () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try{
      let res = await axios.post('/api/login', user)
      console.log(res.data)
      this.props.updateUser(res.data)
    this.props.history.push('/dashboard')
  }catch(err){
    console.log(err)
  }
}

register = async () => {
  let user = {
    username: this.state.username,
    password: this.state.password
  } 
  try { 
    let res = await axios.post('/api/register', user)
    this.props.updateUser(res.data)
    this.props.history.push('/dashboard')
  } catch (err){
    console.log(err)
  }
}

  render() {
    return(
      <div>
        <div>
          <input placeholder='username' onChange={ e => this.handleUpdateUsername(e.target.value)}/>
          <input placeholder='password' onChange={ e => this.handleUpdatePassword(e.target.value)}/>
          <button onClick={this.login}>Login</button>
          <button onClick={this.register}>Register</button>
        </div>
      </div>
    )
  }
}
export default connect(null, {updateUser})(Auth)