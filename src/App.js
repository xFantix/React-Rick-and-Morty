import React, { Component, useState } from 'react';
import './Style/App.css'
import SendForm from './Components/SendForm'



const App = () => {

  const [name, setName] = useState('');
  const [alive, setAlive] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [err, setErr] = useState('');

  const handleChangeInput = (e) => {
    setName(e.target.value)
  }

  const handleSendSubmit = (e) => {
    console.log("send");
  }


  return (
    <div className="App">
      <h1 className='header'>Rick and Morty<br />Information</h1>
      <section className="section">
        <div className="section__left">
          <SendForm name={name} Change={handleChangeInput} send={handleSendSubmit} />
        </div>
        <div className="section__right">

        </div>
      </section>
    </div >
  );
}

export default App;

