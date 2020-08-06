import React, { Component, useState } from 'react';
import './Style/App.css'
import SendForm from './Components/SendForm'
import List from './Components/List'



const App = () => {

  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);





  const handleChangeInput = (e) => {
    setName(e.target.value)
  }

  const handleSendSubmit = (e) => {
    e.preventDefault();

    const API = `https://rickandmortyapi.com/api/character/?name=${name}`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Dont work :(");
      })
      .then(response => response.json())
      .then(data => {
        setErr(false);
        setUsers(data.results);

      })
      .catch(err => setErr(true))

  }


  return (
    <div className="App">
      <h1 className='header'>Rick and Morty<br />Information</h1>
      <section className="section">

        <SendForm name={name} Change={handleChangeInput} send={handleSendSubmit} />

        <List users={users} />

      </section>
    </div >
  );
}

export default App;

