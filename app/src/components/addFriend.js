import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth'
import { Link } from 'react-router-dom'

function AddFriend(props) {

const [formValues, setFormValues] = useState({
    name: '',
    age: '',
    email: ''
})

const handleChange = e => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = () => {
    axiosWithAuth().post('http://localhost:5000/api/friends', formValues)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        })
        props.history.push('/friends')
}

  return (
    <div className="addFriend">
        <h1>Add new Friend</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' name='name' value={formValues.name} placeholder='Name'/>
            <input onChange={handleChange} type='text' name='age' value={formValues.age} placeholder='Age'/>
            <input onChange={handleChange} type='text' name='email' value={formValues.email} placeholder='Email'/>

           <input type='submit'/>
        </form>
    </div>
  );
}

export default AddFriend;
