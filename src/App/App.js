import './App.css';
import React from 'react';
import { useState } from 'react'
import { Form } from './Form'
import { Container } from './Container'
import { getReservations } from './APICalls';

function App() {
  const [reservations, setReservations] = useState([])

  getReservations()
  .then((resp) => setReservations(resp))
  .catch((error) => console.error(error));

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form />
      <Container reservations={reservations}/>
      {/* <div className='resy-form'>
      </div>
      <div className='resy-container'>
      </div> */}
    </div>
  );
}

export default App; 