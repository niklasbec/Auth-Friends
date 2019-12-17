import React, { useState } from 'react';
import axios from 'axios'


function Login(props) {

    const handleChange = e => {
        props.setCredentials({
            ...props.credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', {
         username: props.credentials.username,
         password: props.credentials.password,
    })
    .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friends')
    })
    .catch(error => {
        alert(error.message);
      });
  };
    

  return (
    <div className="addFriend">
        <h1>Login</h1>
      <form onSubmit={login}>
          <input onChange={handleChange} placeholder='Username' type='text' name='username' value={props.credentials.username} />
          <input onChange={handleChange} placeholder='Password' type='password' name='password' value={props.credentials.password} />
          <input type='submit' />
      </form>
    </div>
  );
}

export default Login;
