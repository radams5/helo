import React from 'react';


 function Nav(props){   
    if(props.location.pathname !== '/') {
      return(
        <div>
          <button>Home</button>
          <button>New Post</button>
          <button>Auth</button>
        </div>
      )
    }
    return null
  }
export default Nav