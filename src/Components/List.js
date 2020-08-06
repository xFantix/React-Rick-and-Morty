
import React, { Component, useState } from 'react';
import ElementList from './ElementList'
import '../Style/list.css'
const List = (props) => {

    const users = props.users.map(user =>
        <ElementList key={user.id} user={user} />
    );

    return (
        <div className='list'>

            {users}

        </div>
    );
}

export default List;