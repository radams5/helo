import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Nav(props){   
  if(props.location.pathname !== '/') {
   
      return(
        <div>
          <Link to='/dashboard'>
            <button>Home</button>
          </Link>
          <Link to='/post/:postid'>
            <button>New Post</button>
          </Link>
          <Link to='/'>
            <button>Auth</button>
          </Link>
          <h2>{props.username}</h2>
          <img src={props.profilePic} alt='profile pic'/>
         
        </div>
      )
    }
    return null
  }

  const mapStateToProps = (reduxState) => {
    return {
       username: reduxState.username,
      profilePic: reduxState.profilePic    }
  }

export default connect(mapStateToProps)(Nav)