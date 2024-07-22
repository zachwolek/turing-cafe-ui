import './Card.css'

export const Card = ({date, id, name, number, time}) => {
    return(
        <div className='card' id={id} key={id}>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {number}</p>
        </div>
    )
}