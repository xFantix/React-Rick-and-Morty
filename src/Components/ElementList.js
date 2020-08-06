import React, { Component, useState } from 'react'
import '../Style/elementList.css'

const ElementList = (props) => {


    return (
        <div className="elementList">
            <img className='elementList__photo' alt='user' src={props.user.image} />
            <div className='elementList__about'>
                <h1 className='elementList__about__name'>Name: {props.user.name}</h1>
                <h2 className='elementList__about__status'>Status: {props.user.status}</h2>
                <h2 className='elementList__about__species'>Species: {props.user.species}</h2>
            </div>

        </div>
    );
}

export default ElementList;

