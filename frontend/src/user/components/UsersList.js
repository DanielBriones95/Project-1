import React from 'react';

import UserIteam from './UserItem'
import './UsersList.css';

const UsersList = props => {
    if (props.item.length === 0){
        return (
        <div className="center">
            <h2>No user found.</h2>
        </div>
        );
    }

    return ( 
    <ul className='users-list'>

        {props.iteams.map(user => (
            <UserIteam 
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                placeCount={user.places} 
            />
        ))}
    </ul>
    );
};

export default UsersList; 
