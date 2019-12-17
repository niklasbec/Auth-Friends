import React, { useState } from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Login from './components/login'
import Friends from './components/friends'

function App(props) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''

  })

  const [loginToggle, setLoginToggle] = useState({
    toggler: 'Login'
  })
  const [token, setToken] = useState()

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );

  const logout = (props) => {
    localStorage.removeItem('token')
    if(localStorage.getItem('token') != undefined) {
      setLoginToggle({
        ...loginToggle, toggler: 'Logout'
      })
    } else {
      setLoginToggle({
        ...loginToggle, toggler: 'Login'
      })
    }
  }


  return (
    <div className="App">
      <div className='flex'>
        <Link to='/friends'>
        <p className='nav-link'>Friends</p>
        </Link>
        <Link to='/login'>
        <p className='nav-link'>Login</p>
        </Link>
        <Link to='/login'>
        <button className='logout' onClick={logout}>Logout</button>
        </Link>
      </div>
      
      <PrivateRoute path='/friends' component={Friends} />
      <Route exact path='/login' render={(props) => <Login {...props} credentials={credentials} setCredentials={setCredentials}  />}/>
    </div>
  );
}

export default App;
