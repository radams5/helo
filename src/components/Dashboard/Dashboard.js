import React, { Component } from 'react';
import axios from 'axios'

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
  }

    componentDidMount(){
    this.checkUser()
  }
checkUser = async () => {
  const {id} = this.props
  if (!id) {
    try{
      let res = await axios.get('/api/posts')
      this.props.updateUser(res.data)
      this.props.history.push('dashboard')
    }catch(err){

    }
  } else {
    this.props.history.push('/dashboard')
  }
}


  
  render() {
    return(
      <div>
        <input placeholder='search functionality'/>
        <button>Search</button>
        <button>Reset</button>
      </div>
    )
  }
}
export default Dashboard