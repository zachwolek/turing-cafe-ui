import { useState } from 'react'
import './Form.css'

export const Form = ({addReservation}) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [number, setNumber] = useState('')

    const submitReservation = (event) => {
        event.preventDefault()
        const newReservation = {
            id: Date.now(),
            name,
            date,
            time,
            number
        }
        console.log("NEW RESERVATION ", newReservation)
        addReservation(newReservation)
        clearInput()
    }

    const clearInput = () => {
        setName('')
        setDate('')
        setTime('')
        setNumber('')
    }

    return (
        <form>
            <input className='input'
                 type='text'
                 placeholder='Your Name'
                 name='name'
                 value={name}
                 onChange={event => setName(event.target.value)}
            />
            <input className='input'
                type='text'
                placeholder='Date MM/DD'
                name='date'
                value={date}
                onChange={event => setDate(event.target.value)}
            />
            <input className='input'
                 type='text'
                 placeholder='Time'
                 name='time'
                 value={time}
                 onChange={event => setTime(event.target.value)}
            />
            <input className='input'
                 type='text'
                 placeholder='Number of Guests'
                 name='number'
                 value={number}
                 onChange={event => setNumber(event.target.value)}
            />
            <button
                onClick = {event => submitReservation(event)}
            >Make Reservation
            </button>
        </form>
    )
}