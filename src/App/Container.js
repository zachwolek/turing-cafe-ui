import { Card } from './Card'
import './Container.css'

export const Container = ({reservations}) => {
const reservationCards = reservations.map(reservation => {
    return (
        <Card 
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        />
    )
})

    return(
        <div className='resy-container'>
            {reservationCards}
        </div>
    )
}