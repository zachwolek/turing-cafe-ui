import './Card.css'

export const Card = ({date, id, name, number, time}) => {
    return(
        <div className='card' id={id} key={id}>
            <h2>{name}</h2>
            <p className='date'>{date}</p>
            <p className='time'>{time} pm</p>
            <p className='guests'>Number of guests: {number}</p>
        </div>
    )
}