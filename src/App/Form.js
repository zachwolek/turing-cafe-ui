import { useState } from 'react'
import './Form.css'

export const Form = () => {
    [name, setName] = useState('')
    [date, setDate] = useState('')
    [time, setTime] = useState('')
    [number, setNumber] = useState('')

    return (
        <form>
            <input className='input'
                 type='text'
                 placeholder='Name'
                 name='name'
                 value={name}
                 onChange={event => setName(event.target.value)}
            />
            <input className='input'
                type='text'
                placeholder='Date'
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
                onCLick = {event => submitReservation(event)}
            >Make Reservation
            </button>
        </form>
    )
}