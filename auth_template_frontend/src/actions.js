export function signUp(username, password, history){
  return function(dispatch){
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username,password})
    })
    .then(res=> res.json())
    .then(response => {
      localStorage.setItem("token", response.jwt)
      dispatch({
        type: "GET_USER",
        payload: response.user
      })
    })
    .then(()=> {
      history.push('/')
    })
  }
}

export function logIn(username, password, history){
  return function(dispatch){
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username,password})
    })
    .then(res=> res.json())
    .then(response => {
      if (response.error){
        alert(response.error)
      } else {
        localStorage.setItem("token", response.jwt)
        dispatch({
          type: "GET_USER",
          payload: response.user
        })
      }
      
    })
    .then(()=> {
      history.push('/')
    })
  }
}

export function getUser(jwt, history){
  return function(dispatch){
    fetch('http://localhost:3000/get_user', {
      headers: {
        "Authorization": jwt
      }
    })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: "GET_USER",
        payload: response
      })
    })
    .then(()=> {
      history.push("/")
    })
  }
}