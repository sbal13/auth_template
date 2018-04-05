const defaultState = {
  loggedIn: false,
  currentUser: null
}

export default function(state = defaultState, action){
  switch(action.type){
    case "GET_USER":
      return {...state, currentUser: action.payload, loggedIn: true}
    default:
      return {...state}
  }
}