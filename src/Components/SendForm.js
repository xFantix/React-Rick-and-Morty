import React, { useState } from 'react';
import '../Style/SendForm.css'


const SendForm = (props) => {



    return (

        <form className="form" onSubmit={props.send}>
            <input className="form__input" type="text" placeholder="name" value={props.name} onChange={props.Change} />
            <button className="form__button">Send Me</button>
        </form>
    );
}

export default SendForm;