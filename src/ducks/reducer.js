const initialState = {
  username: '',
  id: 0,
  profilePic: '',
}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(user) {
  return{
    type: UPDATE_USER,
    payload: user
  }
}

export default function reducer(state = initialState, action){
  const {type, payload} = action
  switch(type){
    case UPDATE_USER:
      const {id, username} = payload
      const {profile_pic} = payload
      return{...state, id, username, profilePic: profile_pic}
    default:
      return state
  }
}