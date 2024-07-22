import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { Form } from './Form'
import { Container } from './Container'
import { getReservations } from './APICalls';

function App() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
  getReservations()
  .then((resp) => setReservations(resp))
  .catch((error) => console.error(error));
  }, [])

  function addReservation(newReservation){
    console.log("NEW RESERVATION ON APP", newReservation)
    setReservations([...reservations, newReservation])
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form addReservation={addReservation}/>
      <Container reservations={reservations}/>
      {/* <div className='resy-form'>
      </div>
      <div className='resy-container'>
      </div> */}
    </div>
  );
}

export default App; 