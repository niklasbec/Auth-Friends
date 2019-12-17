import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth'
import AddFriend from './addFriend'

function Friends(props) {

    const [myFriends, setMyFriends] = useState([])


    useEffect( () => {
    
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            setMyFriends(res.data)
        })
        .catch(error => {
            console.log(error);
        })

    }, [])


  return (
    <div className="friends">
        <AddFriend myFriends={myFriends} />
        <div className='friends-grid'>
        {myFriends.map(curr => {
            return(
                <div className='friend' key={curr.id}>
                    <p>{curr.name}</p>
                    <p>{curr.age}</p>
                    <p>{curr.email}</p>
                </div>
            )
        })}
        </div>
    </div>
  );
}

export default Friends;
